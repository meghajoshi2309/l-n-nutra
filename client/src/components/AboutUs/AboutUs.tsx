import Image from "next/image";
import { keyframes, styled } from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 7rem 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
  }
`;

const TextSection = styled.div`
  flex: 1;
  max-width: 100%;
  z-index: 2;

  @media (min-width: 768px) {
    max-width: 500px;
    padding-top: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #94cc4b;
  margin-bottom: 1.5rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin-bottom: 2rem;
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const LearnMoreButton = styled.button`
  background: transparent;
  border: 1px solid #f5e6e0;
  color: #94cc4b;
  padding: 0.75rem 2rem;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    color: #c1dc8d;
    animation: ${pulseAnimation} 1.5s ease-in-out infinite;

    &::before {
      opacity: 1;
    }
  }
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  min-height: 400px;
  width: 100%;

  @media (min-width: 768px) {
    min-height: 600px;
  }
`;

const NavySquare = styled.div`
  position: absolute;
  background: #94cc4b;
  width: 200px;
  height: 200px;
  right: 0;
  top: -20px;
  z-index: 1;

  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
    right: -20px;
    top: -40px;
  }
`;

const PeachRectangle = styled.div`
  position: absolute;
  background: #f5e6e0;
  width: 100%;
  height: 200px;
  bottom: -20px;
  right: -20px;
  z-index: 1;

  @media (min-width: 768px) {
    height: 280px;
    bottom: -40px;
    right: 90px;
  }
`;

const StyledImage = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  z-index: 2;
`;

const ImageCredit = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 1rem;
  font-style: italic;
`;

export default function AboutUs() {
  return (
    <Container>
      <Content>
        <TextSection>
          <Title>About Us</Title>
          <Description>
            Sample text. Click to select the text box. Click again or
            double-click to start editing the text. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Description>
          <LearnMoreButton>Learn More</LearnMoreButton>
        </TextSection>

        <ImageSection>
          <NavySquare />
          <PeachRectangle />
          <StyledImage>
            <img
              src="/about-us.jpg"
              alt="Description of the new image"
              width="70%"
              height="60%"
            />
          </StyledImage>
        </ImageSection>
      </Content>
    </Container>
  );
}
