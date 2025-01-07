import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiClient from "../../api/client";
import { AuthContext } from "../../context/AuthContext";
import {
  CartContainer,
  CartItem,
  CartItemImage,
  CartItemDetails,
  CartItemName,
  CartItemPrice,
  QuantityControl,
  QuantityButton,
  RemoveButton,
  PlaceOrderButton,
  EmptyCartMessage,
  TotalsContainer,
  TotalsRow,
  TotalsLabel,
  TotalsValue,
  AddressContainer,
  AddressItem,
  AddAddressButton,
  EditAddressButton,
  RightContainer,
  CartContent,
  LeftContainer,
  MobileInputContainer,
  OtpInputContainer,
  PaymentModeSelect,
} from "./Cart.styled";
import { useCart } from "../../context/CartContext";
import AddressForm from "../Address/AddressForm";
import UpdateAddressForm from "../Address/UpdateAddressForm"; // Import the new component

interface CartItem {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

interface Product {
  id: number;
  Name: string;
  Price: number;
  ImageUrl: string;
  Description: string;
}

interface CartItemWithProduct extends CartItem {
  product: Product;
}

export interface AddressInput {
  lineOne: string; // First line of the address (required)
  lineTwo?: string; // Second line of the address (optional)
  city: string; // City (required)
  country: string; // Country (required)
  pincode: string; // Pincode or ZIP code (required)
  userId: number; // ID of the user associated with the address (required)
}
export interface AddressInputResponse {
  id: number
  lineOne: string; // First line of the address (required)
  lineTwo?: string; // Second line of the address (optional)
  city: string; // City (required)
  country: string; // Country (required)
  pincode: string; // Pincode or ZIP code (required)
  userId: number; // ID of the user associated with the address (required)
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemWithProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showUpdateAddressForm, setShowUpdateAddressForm] = useState(false);
  const [addresses, setAddresses] = useState<AddressInputResponse[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<AddressInput | null>(null);
  const [addressToEdit, setAddressToEdit] = useState<AddressInputResponse | null>(null);
  const [paymentMode, setPaymentMode] = useState<string>('');
  const [error, setError] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isMobileNumberSaved, setIsMobileNumberSaved] = useState(false);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const { cartItemCount, updateCartCount } = useCart();

  const [isEligibleForDiscount, setIsEligibleForDiscount] = useState(false);

  useEffect(() => {
    const fetchDiscountEligibility = async () => {
      if (user) {
        try {
          const response = await apiClient.post('/prebook/check-discount-eligibility', {
            userId: user.userId,
          });
          setIsEligibleForDiscount(response.data.eligible);
        } catch (error) {
          console.error('Failed to check discount eligibility:', error);
        }
      }
    };

    fetchDiscountEligibility();
  }, [user]);


  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login if not logged in
      return;
    }
    fetchCartItems();
    fetchUserAddresses();
    fetchSavedMobileNumber();
  }, [user, navigate]);

  const handleSavePhoneNumber = async () => {
    if (!mobileNumber) {
      setError('Please enter a valid mobile number.');
      return;
    }

    try {
      // Replace with your backend API URL
      const response = await apiClient.post('/phone-number', {
        userId: user?.userId,
        mobilenumber: mobileNumber,
      });

      if (response.status === 201) {
        setError(''); // Clear any previous errors
        setIsMobileNumberSaved(true)
        toast.success('Phone number saved successfully');
      }
    } catch (err) {
      setError('Failed to save the phone number. Please try again.');
      setIsMobileNumberSaved(false)
      toast.error('Error saving phone number');
    }
  };

  const fetchSavedMobileNumber = async () => {
    try {
      const response = await apiClient.get(`/phone-number/user/${user?.userId}`);
      if (response.data && response.data.mobilenumber) {
        setMobileNumber(response.data.mobilenumber);
        setIsMobileNumberSaved(true); // Mark as saved
      }
    } catch (error) {
      console.error("Failed to fetch mobile number:", error);
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await apiClient.get("/cart");
      const cartItems = response.data;

      // Fetch product details for each cart item
      const cartItemsWithProducts = await Promise.all(
        cartItems.map(async (item: CartItem) => {
          const productResponse = await apiClient.get(`/products/${item.productId}`);
          return {
            ...item,
            product: productResponse.data,
          };
        })
      );

      setCartItems(cartItemsWithProducts);
    } catch (error) {
      toast.error("Failed to fetch cart items.");
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (cartItemId: number, quantity: number) => {
    try {
      await apiClient.put(`/cart/${cartItemId}`, { quantity });
      fetchCartItems(); // Refresh cart items
    } catch (error) {
      toast.error("Failed to update quantity.");
    }
  };

  const removeItem = async (cartItemId: number) => {
    try {
      await apiClient.delete(`/cart/${cartItemId}`);
      updateCartCount(cartItemCount - 1); // Update cart count
      fetchCartItems(); // Refresh cart items
    } catch (error) {
      toast.error("Failed to remove item.");
    }
  };

  const fetchUserAddresses = async () => {
    try {
      const response = await apiClient.get(`/addresses/user/${user?.userId}`);
      setAddresses(response.data);
    } catch (error) {
      toast.error("Failed to fetch addresses.");
    }
  };

  const handleAddressSubmit = async (address: AddressInput) => {
    try {
      if (user) {
        address.userId = user.userId;
        await apiClient.post("/addresses", address);
        toast.success("Address saved successfully!");
        fetchUserAddresses(); // Refresh addresses
      }
    } catch (error) {
      toast.error("Failed to save address.");
    }
  };

  const handleUpdateAddress = async (id: number, address: AddressInput) => {
    try {
      if (user) {
        await apiClient.put(`/addresses/${id}`, address);
        toast.success("Address updated successfully!");
        fetchUserAddresses(); // Refresh addresses
      }
    } catch (error) {
      toast.error("Failed to update address....");
    }
  };

  const handleDeleteAddress = async (addressId: number) => {
    try {
      await apiClient.delete(`/addresses/${addressId}`);
      toast.success("Address deleted successfully!");
      fetchUserAddresses(); // Refresh addresses
    } catch (error) {
      toast.error("Failed to delete address.");
    }
  };

  // const placeOrder = async () => {
  //   if (!selectedAddress) {
  //     toast.error("Please select an address.");
  //     return;
  //   }
  //   try {
  //     await apiClient.post("/orders", { addressId: selectedAddress.userId });
  //     toast.success("Order placed successfully!");
  //     setCartItems([]); // Clear cart
  //   } catch (error) {
  //     toast.error("Failed to place order.");
  //   }
  // };

  const placeOrder = async () => {
    if (!selectedAddress || !paymentMode || !isMobileNumberSaved) {
      toast.error("Please select payment mode, address, and save phone number.");
      return;
    }
    try {
      const addressString = `${selectedAddress.lineOne}, ${selectedAddress.lineTwo || ''} ${selectedAddress.city}, ${selectedAddress.country} - ${selectedAddress.pincode}`;
      const productsData = cartItems.map(item => ({ productId: item.productId, quantity: item.quantity }));
      await apiClient.post("/orders", {
        userId: user?.userId,
        address: addressString,
        mobileNumber: mobileNumber || "",
        netAmount: calculateTotal(),
        paymentMode: paymentMode,
        products: productsData,
      });
      toast.success("Order placed successfully!");

      await apiClient.put("/cart/soft-delete-all", {
        userId: user?.userId,
      })

      // Clear the cart items from the state
      setCartItems([]);

      // Update the cart count in the CartContext
      updateCartCount(0);

      // Reset selected address and payment mode
      setSelectedAddress(null);
      setPaymentMode('');

      // Redirect to order confirmation page
      navigate("/order-confirmation");

    } catch (error) {
      toast.error("Failed to place order.");
    }
  };

  // Calculate subtotal, discount, and total
  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.product.Price * item.quantity, 0);

    // Apply 30% discount if eligible, otherwise apply 10% discount
    const discount = isEligibleForDiscount && paymentMode === 'ONLINE' ? subtotal * 0.3 : subtotal * 0.1;

    return subtotal - discount;
  };
  const isOrderReady = paymentMode !== '' && selectedAddress !== null && isMobileNumberSaved;

  if (loading) return <p>Loading...</p>;

  return (
    <CartContainer>
      <CartContent>
        <LeftContainer>
          {cartItems.length === 0 ? (
            <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
          ) : (
            cartItems.map((item) => (
              <CartItem key={item.id}>
                <CartItemImage src={item.product.ImageUrl} alt={item.product.Name} />
                <CartItemDetails>
                  <CartItemName>{item.product.Name}</CartItemName>
                  <CartItemPrice>₹{item.product.Price}</CartItemPrice>
                  <CartItemPrice>{item.product.Description}</CartItemPrice>
                  <QuantityControl>
                    <QuantityButton
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </QuantityButton>
                    <span>{item.quantity}</span>
                    <QuantityButton
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </QuantityButton>
                    <RemoveButton onClick={() => removeItem(item.id)}>
                      Remove
                    </RemoveButton>
                  </QuantityControl>
                </CartItemDetails>
              </CartItem>
            ))
          )}
        </LeftContainer>

        <RightContainer>
          <AddressContainer>
            <h3>Select Address</h3>
            {addresses.map((address, index) => (
              <AddressItem key={index}>
                <input
                  type="radio"
                  name="address"
                  value={index}
                  onChange={() => setSelectedAddress(address)}
                />
                <div>
                  <p>{address.lineOne}</p>
                  {address.lineTwo && <p>{address.lineTwo}</p>}
                  <p>
                    {address.city}, {address.country}, {address.pincode}
                  </p>
                </div>
                <EditAddressButton
                  onClick={() => {
                    setAddressToEdit(address);
                    setShowUpdateAddressForm(true);
                  }}
                >
                  <img src="/edit.png" style={{ height: '0.7rem', width: '0.7rem' }} />
                </EditAddressButton>&nbsp;&nbsp;
                <RemoveButton onClick={() => handleDeleteAddress(address.id)}>
                  <img src="/delete.png" style={{ height: '1rem', width: '1rem' }} />
                </RemoveButton>
              </AddressItem>
            ))}
            <AddAddressButton onClick={() => setShowAddressForm(true)}>
              + Add New Address
            </AddAddressButton>
          </AddressContainer>
          <AddressContainer>
            <MobileInputContainer>
              <input
                type="text"
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <button onClick={handleSavePhoneNumber}>
                Save
              </button>
            </MobileInputContainer>

            <PaymentModeSelect
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
            >
              <option value="" disabled>Select Payment Mode</option>
              <option value="CASH_ON_DELIVERY">Cash on Delivery</option>
              <option value="ONLINE">Online Payment</option>
            </PaymentModeSelect>
          </AddressContainer>
          <TotalsContainer>
            <TotalsRow>
              <TotalsLabel>Subtotal:</TotalsLabel>
              <TotalsValue>₹{calculateTotal().toFixed(2)}</TotalsValue>
            </TotalsRow>
            <TotalsRow>
              <TotalsLabel>
                Discount ({isEligibleForDiscount && paymentMode === 'ONLINE' ? '37%' : '10%'}):
              </TotalsLabel>
              <TotalsValue>
                - ₹{(isEligibleForDiscount && paymentMode === 'ONLINE' ? calculateTotal() * 0.3 : calculateTotal() * 0.1).toFixed(2)}
              </TotalsValue>
            </TotalsRow>
            <TotalsRow>
              <TotalsLabel>Total:</TotalsLabel>
              <TotalsValue>
                ₹{(
                  calculateTotal() -
                  (isEligibleForDiscount && paymentMode === 'ONLINE'
                    ? calculateTotal() * 0.3
                    : calculateTotal() * 0.1)
                ).toFixed(2)}
              </TotalsValue>

            </TotalsRow>
            <PlaceOrderButton
              onClick={placeOrder}
              disabledProps={!isOrderReady}
            >
              Place Order
            </PlaceOrderButton>
          </TotalsContainer>
        </RightContainer>
      </CartContent>

      <>
        {user && (
          <AddressForm
            show={showAddressForm}
            onHide={() => setShowAddressForm(false)}
            onSubmit={handleAddressSubmit}
            userId={user.userId}
          />
        )}
        {addressToEdit && user && (
          <UpdateAddressForm
            key={addressToEdit.id}
            show={showUpdateAddressForm}
            onHide={() => setShowUpdateAddressForm(false)}
            onSubmit={handleUpdateAddress}
            initialValues1={{
              lineOne: addressToEdit?.lineOne || "",
              lineTwo: addressToEdit?.lineTwo || "",
              city: addressToEdit?.city || "",
              country: addressToEdit?.country || "",
              pincode: addressToEdit?.pincode || "",
              userId: user.userId,
            }}
            addressId={addressToEdit?.id || 0}
          />
        )}
      </>
    </CartContainer>
  );
};

export default Cart;




































