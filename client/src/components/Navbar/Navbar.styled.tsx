import styled, { css, keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const expandAnimation = keyframes`
  from {
    width: 40px;
  }
  to {
    width: 200px;
  }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
  justify-content: space-between;
`;

/* Main Content Wrapper */
export const MainContent = styled.div`
  margin-top: 70px; /* Same as the height of the navbar */
  overflow-y: auto; /* Enables scrolling for the content */
  height: calc(100vh - 70px); /* Full viewport height minus the navbar height */
  padding: 1rem;
  position: relative;
`;

export const LogoContainer = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #94cc4b;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #cfed95;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const MobileSearchContainerr = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: flex-start;
  width: auto; /* Let the width adjust dynamically */
  height: auto; /* Adjust height to fit content */
  transition: height 0.3s ease-in-out;
  border: none;

  @media (max-width: 768px) {
    display: flex; /* Visible on mobile */
    width: auto; /* Fit content dynamically */
  }

  @media (min-width: 769px) {
    display: none; /* Hide on desktop */
  }
`;

export const MobileSearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 8px;
`;

export const MobileSearchInputt = styled.input`
  display: none; /* Initially hidden */
  width: 100%; /* Full width for input */
  margin-top: 8px; /* Add margin to place it on the second row */
  padding: 8px;
  border: 1px solid #878885;
  border-radius: 5px;
  font-size: 14px;

  ${MobileSearchContainerr}:hover &,
  ${MobileSearchContainerr}:focus-within & {
    display: block; /* Show input on hover or focus */
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 40px; /* Start with only the icon visible */
  height: 40px;
  transition: width 0.3s ease-in-out;
  overflow: hidden; /* Ensure no overflow before expansion */
  border: 1px solid transparent;
  border-radius: 20px;

  &:hover,
  &:focus-within {
    width: 200px; /* Expand the container when hovered or focused */
    border: 1px solid #878885; /* Add border on hover/focus */
  }

  @media (max-width: 768px) {
    width: 100%;
    &:hover,
    &:focus-within {
      width: 100%; /* Expand to full width on mobile */
    }
  }
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 40px 0 20px; /* Add space for the search icon */
  background: transparent;
  color: #709c36;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, width 0.3s ease-in-out; /* Smooth transitions */
  line-height: 40px;
  font-size: 16px;
  border: none; /* Remove the default input border */
  outline: none;

  &::placeholder {
    color: #709c36;
    opacity: 0.7;
  }

  &:focus {
    opacity: 1;
    background: transparent; /* Optional: Add background on focus */
    border-radius: 20px;
  }

  ${SearchContainer}:hover &,
  ${SearchContainer}:focus-within & {
    opacity: 1; /* Show the input when the container is hovered or focused */
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    display: none; /* Hide the search icon on mobile view */
  }
`;

// export const Image = styled.img``;

export const CartButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff4444;
  color: white;
  font-size: 12px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (max-width: 768px) {
    display: block;
  }
`;

// export const MobileMenu = styled.div<{ isOpen: boolean }>`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 80%;
//   max-width: 300px;
//   height: 100vh;
//   background: white;
//   padding: 2rem;
//   transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
//   animation: ${(props) => (props.isOpen ? slideIn : slideOut)} 0.3s ease;
//   z-index: 1001;
// `;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

// export const CloseButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   transition: transform 0.2s ease;

//   &:hover {
//     transform: rotate(90deg);
//   }
// `;

export const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const MobileNavLink = styled(NavLink)`
  font-size: 1.2rem;
`;

// export const Overlay = styled.div<{ isVisible: boolean }>`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.5);
//   opacity: ${(props) => (props.isVisible ? "1" : "0")};
//   visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
//   transition: all 0.3s ease;
//   z-index: 1000;
// `;

export const MobileSearchContainer = styled.div<{ isExpanded: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  transform: translateY(${(props) => (props.isExpanded ? "0" : "-100%")});
  transition: transform 0.3s ease;
  z-index: 1002;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileSearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #666;
  }
`;

export const LoginButton = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: x-large;
  border-radius: 15px;
  border: 1px solid #878885;
  background: transparent;
  color: #94cc4b;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
    filter: blur(5px);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.05);
    color: #c1dc8d;
    border-color: transparent;
    animation: ${pulseAnimation} 1.5s ease-in-out infinite;

    &::before {
      opacity: 1;
    }
  }

  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #505050;
    z-index: -1;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background: white;
  padding: 2rem;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 1001;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const Overlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 1000;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease, color 0.3s ease;
  &:hover {
    transform: rotate(90deg);
    color: #ff4444;
  }
`;
