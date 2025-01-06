import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

// export const CartContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//   }
// `;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CartItemDetails = styled.div`
  flex: 1;
`;

export const CartItemName = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const CartItemPrice = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #555;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const QuantityButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #ddd;
  }
`;

export const RemoveButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ff4d4d;
  background-color: #fff;
  border-radius: 4px;
  color: #ff4d4d;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #ff4d4d;
    color: #fff;
  }
`;

export const TotalsContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-top: 20px;
  @media (min-width: 768px) {
  }
`;

export const TotalsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TotalsLabel = styled.span`
  font-weight: bold;
  color: #333;
`;

export const TotalsValue = styled.span`
  color: #555;
`;

export const PlaceOrderButton = styled.button<{ disabledProps?: boolean }>`
  width: 100%;
  padding: 10px;
  background-color: ${({ disabledProps }) => (disabledProps ? "#6c757d" : "#28a745")};
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: ${({ disabledProps }) => (disabledProps ? "not-allowed" : "pointer")};
  font-size: 16px;
  &:hover {
    background-color: ${({ disabledProps }) => (disabledProps ? "#6c757d" : "#218838")};
  }
`;


export const EmptyCartMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #555;
`;


export const AddressContainer = styled.div`
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
`;

export const AddressItem = styled.label`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #007bff;
  }

  input[type="radio"] {
    margin-right: 12px;
    margin-top: 4px;
    cursor: pointer;
  }

  div {
    flex: 1;

    p {
      margin: 0;
      font-size: 14px;
      color: #555;

      &:first-child {
        font-weight: 500;
        color: #333;
      }
    }
  }
`;

export const AddAddressButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  border: 1px dashed #007bff;
  border-radius: 8px;
  background-color: transparent;
  color: #007bff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }

  svg {
    margin-right: 8px;
  }
`;



export const EditAddressButton = styled.button`
  background-color: transparent;
  border: 1px solid #007bff; // Blue border
  color: #007bff; // Blue text
  padding: 6px 12px; // Padding for better clickability
  border-radius: 4px; // Rounded corners
  font-size: 14px; // Consistent font size
  font-weight: 500; // Medium font weight
  cursor: pointer; // Pointer cursor on hover
  transition: background-color 0.3s ease, color 0.3s ease; // Smooth transition

  &:hover {
    background-color: #b2d0f0; // Blue background on hover
    color: #fff; // White text on hover
  }

  &:focus {
    outline: none; // Remove default focus outline
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25); // Add focus shadow
  }

  &:active {
    background-color: #0056b3; // Darker blue on active
    border-color: #0056b3; // Darker border on active
  }

  &:disabled {
    background-color: #e9ecef; // Light gray when disabled
    border-color: #dee2e6; // Light border when disabled
    color: #6c757d; // Gray text when disabled
    cursor: not-allowed; // Not-allowed cursor when disabled
  }
`;


export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LeftContainer = styled.div`
  flex: 6; // Allocate more space for the product list
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RightContainer = styled.div`
  flex: 3; // Allocate less space for the totals and address container
  display: flex;
  flex-direction: column;
  gap: 20px;
`;






// export const RemoveButton = styled.button`
//   background-color: transparent;
//   border: 1px solid #dc3545; // Red border
//   color: #dc3545; // Red text
//   padding: 6px 12px; // Padding for better clickability
//   border-radius: 4px; // Rounded corners
//   font-size: 14px; // Consistent font size
//   font-weight: 500; // Medium font weight
//   cursor: pointer; // Pointer cursor on hover
//   transition: background-color 0.3s ease, color 0.3s ease; // Smooth transition

//   &:hover {
//     background-color: #f8d7da; // Light red background on hover
//     color: #721c24; // Dark red text on hover
//   }

//   &:focus {
//     outline: none; // Remove default focus outline
//     box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.25); // Add focus shadow
//   }

//   &:active {
//     background-color: #c82333; // Darker red on active
//     border-color: #bd2130; // Darker border on active
//   }

//   &:disabled {
//     background-color: #e9ecef; // Light gray when disabled
//     border-color: #dee2e6; // Light border when disabled
//     color: #6c757d; // Gray text when disabled
//     cursor: not-allowed; // Not-allowed cursor when disabled
//   }
// `;

export const MobileInputContainer = styled.div`
  margin-top: 20px;
  display: flex;

  input {
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 14px;
    margin-right: 10px;

    &:disabled {
      background-color: #f9f9f9;
      cursor: not-allowed;
    }
  }

  button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:disabled {
      background-color: #e9ecef;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: #0056b3;
    }
  }
`;

export const OtpInputContainer = styled.div`
  margin-top: 10px;

  input {
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 14px;
    margin-right: 10px;

    &:disabled {
      background-color: #f9f9f9;
      cursor: not-allowed;
    }
  }

  button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:disabled {
      background-color: #e9ecef;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: #218838;
    }
  }
`;

export const PaymentModeSelect = styled.select`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;