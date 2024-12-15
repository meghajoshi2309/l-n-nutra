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


export const Tag = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #ff5722;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  z-index: 2;
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

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 0.6;
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

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0 0 5px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 12px;
  }
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
