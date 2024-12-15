import styled, { keyframes } from "styled-components";

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
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

















