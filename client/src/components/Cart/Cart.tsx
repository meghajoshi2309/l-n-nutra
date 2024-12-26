import { styled } from "styled-components";
import ProductPopup from "./ProductPopup";
import { useState } from "react";

const CartContainer = styled.div`
  padding: 2rem;
`;

const Cart = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true)

  const handleClose = () => {
    setIsPopupOpen(false)
  }
    return (
      <CartContainer>
      {isPopupOpen && <ProductPopup onClose={handleClose} />}
    </CartContainer>
    )

}


export default Cart;