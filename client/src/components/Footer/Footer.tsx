import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #000000;
  color: white;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const SocialIconWrapper = styled.a`
  background-color: white;
  color: black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0 1rem;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  transition: text-decoration 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer: React.FC = () => {
  return (
    <>
      <FooterContainer>
        <SocialIconsContainer>
          <SocialIconWrapper
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </SocialIconWrapper>
          <SocialIconWrapper
            href="https://www.instagram.com/luminaire_nutritions?igsh=MWluaTduOGg5b2Qzag%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </SocialIconWrapper>
          <SocialIconWrapper
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </SocialIconWrapper>
          <SocialIconWrapper
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google"
          >
            <FaGoogle size={20} />
          </SocialIconWrapper>
          <SocialIconWrapper
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </SocialIconWrapper>
        </SocialIconsContainer>
        <NavContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/our-story">Our Story</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contact">Contact Us</StyledLink>
          <StyledLink to="/team">Our Team</StyledLink>
        </NavContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
