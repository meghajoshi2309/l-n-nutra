import styled from "styled-components";



export const Card = styled.div`
  position: relative;
  width: 100%;
  /* max-width: 450px; Increased max width for better spacing */
  height: 450px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: 400px; /* Adjust for smaller screens */
  }
`;


export const Tag = styled.div`
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


export const ImageWrapper = styled.div`
  position: relative;
  /* width: 100%; */
  /* height: 200px; */
  overflow: hidden;

  @media (max-width: 768px) {
    height: 150px;
  }
`;


export const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const ActionIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  color: #555;
  cursor: pointer;

  &:hover {
    background: #ff5722;
    color: #fff;
  }
`;

export const ProductInfo = styled.div`
  padding: 15px;
  text-align: center;
`;


export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Exactly 3 products per row */
  gap: 20px;
  padding: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 products per row for tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 product per row for mobile */
  }
`;


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;




export const CardContainer = styled.div`
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


export const ImageContainer = styled.div`
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

export const AspectRatioContainer = styled.div`
  width: 100%;
  padding-bottom: 100%; /* 1:1 Aspect Ratio (square) */
  position: relative;
`;

export const ProductImage = styled.img`
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



export const HoverIcons = styled.div`
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

export const IconButton = styled.button`
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


export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const QuantityButton = styled.button<{ disabled?: boolean }>`
  background-color: #f9f9f9;
  border: 1px solid #ff4d4d;
  color: ${(props) => (props.disabled ? '#ccc' : '#ff4d4d')}; // Gray out if disabled
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')}; // Not-allowed cursor if disabled
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ff4d4d;
    color: #fff;
  }
`;

export const RemoveButton = styled.button`
  padding: 4px 8px;
  border: 1px solid #ff4d4d;
  background-color: #fff;
  color: #ff4d4d;
  cursor: pointer;
  &:hover {
    background-color: #ff4d4d;
    color: #fff;
  }
`;




// Container for product details
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProductName = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
`;

export const MobileIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 12px;
`;

export const MobileIconButton = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const MobileQuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MobileQuantityButton = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #f7f7f7;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const MobileRemoveButton = styled.button`
  background-color: #ff4d4f;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #ff7875;
  }

  &:active {
    transform: scale(0.95);
  }
`;
