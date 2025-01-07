import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  text-align: center;
  width: 90%;
  max-width: 400px;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

interface DiscountPopupProps {
  onClose: () => void;
}

const DiscountPopup: React.FC<DiscountPopupProps> = ({ onClose }) => {
  return (
    <>
      <Overlay />
      <PopupContainer>
        <h2>🎉 Congratulations! 🎉</h2>
        <p>You are eligible for a <strong>37% discount</strong>!</p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </PopupContainer>
    </>
  );
};

export default DiscountPopup;
