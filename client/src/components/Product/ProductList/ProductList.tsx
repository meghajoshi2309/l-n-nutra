// // ProductCard.tsx
// import React, { useEffect, useState } from 'react';
// import { Product } from '../../Type/Product';
// import apiClient from '../../../api/client';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { AspectRatioContainer, CardContainer, Container, DetailsContainer, HoverIcons, IconButton, ImageContainer, ProductImage, ProductName, ProductPrice, Tag } from './ProductList.styled';



// const ProductList: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await apiClient.get('/products');
//         setProducts(response.data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p>Error: {error}</p>;
//   return (
//     <Container>
//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           id={product.id}
//           image={product.ImageUrl || ""}
//           name={product.Name}
//           price={product.Price}
//           tag={product.Tag}
//           description={product.Description}
//         />
//       ))}
//     </Container>
//   );
// };




// interface ProductCardProps {
//   id: number;
//   image: string;
//   name: string;
//   price: string;
//   tag?: string;
//   description?: string
// }

// const ProductCard: React.FC<ProductCardProps> = ({id, image, name, price, tag, description }) => {

//   const navigate = useNavigate();

//   const addToCart = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login'); // Redirect to login page
//       return;
//     }
//     try {
//       const response = await apiClient.post('/cart', { productId: id, quantity: 1 });
//       toast.success('Item added to cart!');
//     } catch (error) {
//       toast.error('Failed to add item to cart.');
//     }
//   };
//   return (
//     <CardContainer>
//       <ImageContainer>
//         <AspectRatioContainer>
//           <ProductImage src={image} alt={name} />
//         </AspectRatioContainer>
//         {tag && <Tag>{tag}</Tag>}
//         <HoverIcons>
//           <IconButton>
//             <img src="/view.svg" alt="view" />
//           </IconButton>
//           <IconButton onClick={addToCart}>
//             <img src="/product-cart.svg" alt="view" />
//           </IconButton>
//         </HoverIcons>
//       </ImageContainer>
//       <DetailsContainer>
//         <ProductName>{name}</ProductName>
//         <ProductPrice>{price}</ProductPrice>
//         <ProductPrice>{description}</ProductPrice>
//       </DetailsContainer>
//     </CardContainer>
//   );
// };

// export default ProductList;


import React, { useEffect, useState } from 'react';
import { Product } from '../../Type/Product';
import apiClient from '../../../api/client';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  AspectRatioContainer,
  CardContainer,
  Container,
  HoverIcons,
  IconButton,
  ImageContainer,
  ProductImage,
  Tag,
  QuantityControl,
  QuantityButton,
  RemoveButton,
  DetailsContainer,
  ProductName,
  ProductPrice,
  MobileIconContainer,
  MobileIconButton,
  MobileQuantityControl,
  MobileQuantityButton,
  MobileRemoveButton,
} from './ProductList.styled';
import { useIsMobile } from '../../../Hook/isMobileView';
import { useCart } from '../../../context/CartContext';
import ProductPopup from '../../Products/ProductPopup';
import { Modal } from 'react-bootstrap';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { updateCartCount } = useCart();

  const fetchData = async () => {
    try {
      // Fetch products
      const productsResponse = await apiClient.get('/products');
      setProducts(productsResponse.data);

      // Fetch user's cart items
      const token = localStorage.getItem('token');
      if (token) {
        const cartResponse = await apiClient.get('/cart');
        setCartItems(cartResponse.data);
        updateCartCount(cartResponse?.data?.length)
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {

    fetchData();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      {products.map((product) => {
        const cartItem = cartItems.find((item) => item.productId === product.id);
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.ImageUrl || ""}
            name={product.Name}
            price={product.Price}
            tag={product.Tag}
            description={product.Description}
            cartItem={cartItem}
            setCartItems={setCartItems}
          />
        );
      })}
    </Container>
  );
};

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: string;
  tag?: string;
  description?: string;
  cartItem?: any;
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  price,
  tag,
  description,
  cartItem,
  setCartItems,
}) => {
  const navigate = useNavigate();

  const isMobile = useIsMobile();

  const { updateCartCount, cartItemCount } = useCart();

  const [openProductModal, setOpenProductModal] = useState(false);

  const addToCart = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login page
      return;
    }
    try {
      const response = await apiClient.post('/cart', { productId: id, quantity: 1 });
      setCartItems((prev) => [...prev, response.data]);
      updateCartCount(cartItemCount + 1);
      toast.success('Item added to cart!');
    } catch (error) {
      toast.error('Failed to add item to cart.');
    }
  };

  const increaseQuantity = async () => {
    try {
      const response = await apiClient.put(`/cart/${cartItem.id}`, {
        quantity: cartItem.quantity + 1,
      });
      setCartItems((prev) =>
        prev.map((item) => (item.id === cartItem.id ? response.data : item))
      );
      toast.success('Quantity increased!');
    } catch (error) {
      toast.error('Failed to increase quantity.');
    }
  };

  const decreaseQuantity = async () => {
    try {
      const response = await apiClient.put(`/cart/${cartItem.id}`, {
        quantity: cartItem.quantity - 1,
      });
      setCartItems((prev) =>
        prev.map((item) => (item.id === cartItem.id ? response.data : item))
      );
      toast.success('Quantity decreased!');
    } catch (error) {
      toast.error('Failed to decrease quantity.');
    }
  };

  const removeFromCart = async () => {
    try {
      await apiClient.delete(`/cart/${cartItem.id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== cartItem.id));
      updateCartCount(cartItemCount - 1);
      toast.success('Item removed from cart!');
    } catch (error) {
      toast.error('Failed to remove item from cart.');
    }
  };
  const handleClose = () => {
    setOpenProductModal(false)
  }
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <AspectRatioContainer>
            <ProductImage src={image} alt={name} />
          </AspectRatioContainer>
          {tag && <Tag>{tag}</Tag>}
          {!isMobile && <HoverIcons>
            <IconButton onClick={() => navigate(`/product-details/${id}`)}>
              <img src="/view.svg" alt="view" />
            </IconButton>
            {cartItem ? (
              <QuantityControl>
                <QuantityButton
                  onClick={decreaseQuantity}
                  disabled={cartItem.quantity === 1} // Disable if quantity is 1
                >-</QuantityButton>
                <QuantityButton>{cartItem.quantity}</QuantityButton>
                <QuantityButton onClick={increaseQuantity}>+</QuantityButton>
                <RemoveButton onClick={removeFromCart}>Remove</RemoveButton>
              </QuantityControl>
            ) : (
              <IconButton onClick={addToCart}>
                <img src="/product-cart.svg" alt="Add to Cart" />
              </IconButton>
            )}
          </HoverIcons>}
        </ImageContainer>
        <DetailsContainer>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ProductName>{name}</ProductName>
            <ProductPrice>₹{price}</ProductPrice>
            <ProductPrice>{description}</ProductPrice>
          </div>
          {isMobile && (
            <MobileIconContainer>
              <MobileIconButton onClick={() => setOpenProductModal(true)}>
                <img src="/view.svg" alt="view" />
              </MobileIconButton>
              {cartItem ? (
                <MobileQuantityControl>
                  <MobileQuantityButton
                    onClick={decreaseQuantity}
                    disabled={cartItem.quantity === 1}
                  >
                    -
                  </MobileQuantityButton>
                  <MobileQuantityButton>{cartItem.quantity}</MobileQuantityButton>
                  <MobileQuantityButton onClick={increaseQuantity}>+</MobileQuantityButton>
                  <MobileRemoveButton onClick={removeFromCart}>Remove</MobileRemoveButton>
                </MobileQuantityControl>
              ) : (
                <MobileIconButton onClick={addToCart}>
                  <img src="/product-cart.svg" alt="Add to Cart" />
                </MobileIconButton>
              )}
            </MobileIconContainer>
          )}
        </DetailsContainer>
      </CardContainer>
      
    </>
  );
};

export default ProductList;