import styled, { keyframes } from "styled-components";

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

// Main container
export const HomeContainer = styled.div`
  min-height: 100vh;
  background-image: url('/gym.jpg');
  background-size: cover;
  background-position: center;
  background-color: #000;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;


/* Hero Section */
export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 70px); /* Adjust for navbar height */
  background: url("/gym.jpg") no-repeat center center;
  background-size: cover; /* Ensures the image covers the entire section */
  margin: 0;
  padding: 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    background-size: cover;
    filter: opacity(0.7);
    z-index: -1;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  position: relative;
  z-index: 1;
`;

export const AnimatedText = styled.div`
  animation: ${fadeIn} 1s ease-out;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const HeroText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

// Products Section
export const ProductsSection = styled.section`
  margin-top: 2rem;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const ProductCard = styled.div<{ color: string }>`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  animation: ${slideUp} 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 4px solid ${(props) => props.color};
  }
`;

export const ProductTitle = styled.h2`
  font-size: 1.25rem;
  margin: 1rem;
  color: #333;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  margin: 0 1rem 1rem;
  color: #666;
`;

export const ProductPrice = styled.span`
  display: block;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1rem;
  color: #2575fc;
`;

export const Content = styled.div`
  position: relative;
  padding-top: 200px;
  padding-left: 5%;
  color: white;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #4caf50;
  margin-bottom: 2rem;
  max-width: 800px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #cccccc;
  max-width: 600px;
  line-height: 1.6;
`;
// export const HomeContainer = styled.div`
//   max-width: 100%;
//   margin: 0 auto;
//   padding: 1rem;

//   @media (min-width: 768px) {
//     padding: 2rem;
//   }
// `;
