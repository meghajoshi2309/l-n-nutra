// import React from "react";
// import {
//   ActionIcon,
//   Card,
//   GridContainer,
//   HoverOverlay,
//   IconWrapper,
//   ImageWrapper,
//   ProductImage,
//   ProductInfo,
//   ProductName,
//   ProductPrice,
//   Tag,
// } from "./ProductList.styled";

// import styled from "styled-components";

// const ProductList = () => {
//   const products = [
//     { id: 1, name: "Product 1", price: 29.99, image: "/product-1.jpeg", tag: "Best Seller" },
//     { id: 2, name: "Product 2", price: 19.99, image: "/product-2.jpeg", tag: "New Arrival" },
//     { id: 3, name: "Product 3", price: 15.99, image: "/product-3.jpeg", tag: "Coming Soon" },
//   ];

//   return (
//     <GridContainer>
//       {products.map((product) => (
//         <div style={{border: '2px solid green'}}>
//           <Card key={product.id}>
//             {product.tag && <Tag>{product.tag}</Tag>}
//             <ImageWrapper>
//               <ProductImage src={product.image} alt={product.name} />
//               <HoverOverlay>
//                 <IconWrapper>
//                   <ActionIcon><img src="/view.svg" alt="view" style={{ height: '25px', width: '25px' }} /></ActionIcon>
//                   <ActionIcon><img src="/product-cart.svg" alt="view" style={{ height: '25px', width: '25px' }} /></ActionIcon>
//                 </IconWrapper>
//               </HoverOverlay>
//             </ImageWrapper>
//             <ProductInfo>
//               <ProductName>{product.name}</ProductName>
//               <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
//             </ProductInfo>
//           </Card>
//         </div>

//       ))}
//     </GridContainer>
//   );
// };

// export default ProductList;










// // chategpt
// import React from "react";
// import styled from "styled-components";

// // Styled Components
// const ProductCard = styled.div`
//   border: 2px solid #32cd32;
//   border-radius: 8px;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   background: white;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.02);
//   }
// `;

// const ImageWrapper = styled.div`
//   position: relative;
//   overflow: hidden;
//   img {
//     width: 100%;
//     height: auto;
//     display: block;
//     transition: opacity 0.3s ease;
//   }
//   &:hover img {
//     opacity: 0.7;
//   }
// `;

// const Tag = styled.span`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   background: #ff4500;
//   color: white;
//   padding: 4px 8px;
//   border-radius: 4px;
//   font-size: 12px;
//   font-weight: bold;
// `;

// const IconsWrapper = styled.div`
//   /* position: absolute;
//   bottom: 10px;
//   right: 10px; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   opacity: 0;
//   transition: opacity 0.3s ease;
//   ${ImageWrapper}:hover & {
//     opacity: 1;
//   }
//   button {
//     background: white;
//     border: none;
//     width: 36px;
//     height: 36px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     cursor: pointer;
//     &:hover {
//       background: #f0f0f0;
//     }
//   }
// `;

// const ProductDetails = styled.div`
//   padding: 16px;
//   text-align: center;
//   font-family: Arial, sans-serif;
//   .name {
//     font-size: 16px;
//     font-weight: bold;
//     margin-bottom: 8px;
//   }
//   .price {
//     font-size: 14px;
//     color: #555;
//   }
// `;

// const ProductGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 16px;
//   padding: 16px;
// `;

// // Sample Component
// const ProductView: React.FC = () => {
//   const products = [
//     { id: 1, name: "Product 1", price: "$20", tag: "Best Seller", img: "/product-1.jpeg" },
//     { id: 2, name: "Product 2", price: "$25", tag: "New Arrival", img: "/product-2.jpeg" },
//     { id: 3, name: "Product 3", price: "$15", tag: "Coming Soon", img: "/product-3.jpeg" },
//   ];

//   return (
//     <ProductGrid>
//       {products.map((product) => (
//         <ProductCard key={product.id}>
//           <ImageWrapper>
//             <img src={product.img} alt={product.name} />
//             <Tag>{product.tag}</Tag>
//             <IconsWrapper>
//               <button>👁️</button>
//               <button>🛒</button>
//             </IconsWrapper>
//           </ImageWrapper>
//           <ProductDetails>
//             <div className="name">{product.name}</div>
//             <div className="price">{product.price}</div>
//           </ProductDetails>
//         </ProductCard>
//       ))}
//     </ProductGrid>
//   );
// };

// export default ProductView;




















// // v0 dev

// import styled from "styled-components";
// // import { Eye, ShoppingCart } from 'lucide-react';


// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 20px;
//   padding: 20px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   tag?: string;
// }

// interface ProductGridProps {
//   products: Product[];
// }

// const sampleProducts: Product[] = [
//   {
//     id: 1,
//     name: "Classic T-Shirt",
//     price: 29.99,
//     image: "/product-1.jpeg?height=300&width=300",
//     tag: "Best Seller"
//   },
//   {
//     id: 2,
//     name: "Slim Fit Jeans",
//     price: 59.99,
//     image: "/product-2.jpeg?height=300&width=300",
//     tag: "New Arrival"
//   },
//   {
//     id: 3,
//     name: "Leather Jacket",
//     price: 199.99,
//     image: "/product-3.jpeg?height=300&width=300",
//     tag: "Coming Soon"
//   },
//   // Add more products as needed
// ];


// const ProductView = () => {
//   return (
//     <Grid>
//       {sampleProducts.map((product) => {
//         console.log(product);
//         return <ProductCard key={product.id} product={product} />
//       })}
//     </Grid>
//   );
// };





// const Card = styled.div`
//   border: 2px solid #4caf50;
//   border-radius: 8px;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `;

// const ImageContainer = styled.div`
//   position: relative;
//   padding-top: 100%; // 1:1 Aspect ratio
// `;

// const ProductImage = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: opacity 0.3s ease;
// `;

// const Tag = styled.span`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   background-color: #ff9800;
//   color: white;
//   padding: 5px 10px;
//   border-radius: 4px;
//   font-size: 0.8rem;
//   z-index: 1;
// `;

// const Details = styled.div`
//   background-color: white;
//   padding: 15px;
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// const Name = styled.h3`
//   margin: 0 0 10px 0;
//   font-size: 1.1rem;
// `;

// const Price = styled.span`
//   font-weight: bold;
//   font-size: 1.2rem;
// `;

// const IconsContainer = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   display: flex;
//   gap: 10px;
//   opacity: 0;
//   transition: opacity 0.3s ease;
// `;

// const IconButton = styled.button`
//   background-color: white;
//   border: none;
//   border-radius: 50%;
//   width: 40px;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   opacity: 0;
//   transition: opacity 0.3s ease;
// `;

// const CardContainer = styled.div`
//   position: relative;

//   &:hover ${Overlay}, &:hover ${IconsContainer} {
//     opacity: 1;
//   }

//   &:hover ${ProductImage} {
//     opacity: 0.7;
//   }

//   @media (max-width: 768px) {
//     ${IconsContainer} {
//       opacity: 1;
//       top: auto;
//       bottom: 10px;
//       transform: translateX(-50%);
//     }

//     ${Overlay} {
//       display: none;
//     }

//     ${ProductImage} {
//       opacity: 1 !important;
//     }
//   }
// `;

// const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
//   return (
//     <CardContainer>
//       <Card>
//         <ImageContainer>
//           <ProductImage src={product.image} alt={product.name} />
//           {product.tag && <Tag>{product.tag}</Tag>}
//           <Overlay />
//           <IconsContainer>
//             <IconButton aria-label="View product">
//               {/* <Eye size={20} /> */}
//             </IconButton>
//             <IconButton aria-label="Add to cart">
//               {/* <ShoppingCart size={20} /> */}
//             </IconButton>
//           </IconsContainer>
//         </ImageContainer>
//         <Details>
//           <Name>{product.name}</Name>
//           <Price>${product.price.toFixed(2)}</Price>
//         </Details>
//       </Card>
//     </CardContainer>
//   );
// };

// export default ProductView;














// // Deepseek

// ProductCard.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Product {
  ProductId: number;
  Name: string;
  Description: string;
  Price: string;
  ImageUrl: string;
  StockQuantity: number;
  Tag?: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products'); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <Container>
      {products.map((product) => (
        <ProductCard
          key={product.ProductId}
          image={product.ImageUrl}
          name={product.Name}
          price={product.Price}
          tag={product.Tag}
          description={product.Description}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;


interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  tag?: string;
  description?: string
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, tag, description }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <AspectRatioContainer>
          <ProductImage src={image} alt={name} />
        </AspectRatioContainer>
        {tag && <Tag>{tag}</Tag>}
        <HoverIcons>
          <IconButton>
            <img src="/view.svg" alt="view" />
          </IconButton>
          <IconButton>
            <img src="/product-cart.svg" alt="view" />
          </IconButton>
        </HoverIcons>
      </ImageContainer>
      <DetailsContainer>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
        <ProductPrice>{description}</ProductPrice>
      </DetailsContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  //border: 2px solid #07f813; /* Bright green border */
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  box-sizing: border-box; /* Include border in the card's dimensions */
  padding: 20px; /* Add padding inside the card */

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(150, 149, 149, 0.5); /* Semi-transparent gray */
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 1; /* Set lower z-index */
  }

  &:hover::after {
    opacity: 1; /* Show gray overlay on hover */
  }
`;

const AspectRatioContainer = styled.div`
  width: 100%;
  padding-bottom: 100%; /* 1:1 Aspect Ratio (square) */
  position: relative;
`;

const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container */
  transition: transform 0.3s ease-in-out;

  ${ImageContainer}:hover & {
    transform: scale(1.05); /* Slight zoom effect on hover (optional) */
  }
`;


const Tag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff5722;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
`;

const HoverIcons = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 2; /* Set higher z-index to ensure icons are clickable */

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const IconButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff5722;
    color: white;
  }
`;

const DetailsContainer = styled.div`
  padding: 16px;
  background-color: white;
  text-align: center;
`;

const ProductName = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

const ProductPrice = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
  color: #666;
`;


export default ProductList;




