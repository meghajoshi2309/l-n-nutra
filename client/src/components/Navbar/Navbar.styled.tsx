import styled, { keyframes } from "styled-components";

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

export const NavLinks = styled.nav<{ hasBorder?: boolean }>`
  display: flex;
  margin: 0 auto;
  border: ${({ hasBorder }) => (hasBorder ? '2px solid #878885;' : '')}; 
  border-radius: ${({ hasBorder }) => (hasBorder ? '100px' : '')};
  box-shadow: ${({ hasBorder }) => (hasBorder ? '0 0 20px 0 rgba(255, 255, 255, 0.4)' : '')};
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
  gap: 45px;

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



export const MobileSearchModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: black;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileSearchInputContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  background: #3b3b3b;
  border-radius: 8px;
  padding: 10px;
  position: relative;
`;

export const MobileSearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;
  color: white;
`;

export const MobileSearchActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MobileSearchIcon = styled.div`
  img {
    cursor: pointer;
  }
`;

export const MobileSearchCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
`;

export const MobileSearchContainer = styled.div`
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

export const SearchContainer = styled.div`
  position: relative; /* Allows input to expand inside */
  width: 40px; /* Fixed width to prevent layout shift */
  height: 40px; /* Fixed height */
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none; /* Hide on mobile view */
  }
`;


export const SearchInput = styled.input`
  position: absolute; /* Absolute positioning to expand without affecting layout */
  top: 0;
  left: -200px; /* Adjust the input to expand towards the left */
  width: 0; /* Initially hidden */
  height: 100%; /* Match container height */
  padding: 0 40px 0 15px; /* Add space for the icon */
  border: 1px solid #878885;
  border-radius: 20px;
  outline: none;
  background: transparent;
  opacity: 0; /* Hidden initially */
  visibility: hidden; /* Prevent focus highlight */
  transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out, left 0.3s ease-in-out;
  color: #709c36;
  
  &::placeholder {
    color: #709c36;
    opacity: 0.7;
  }

  ${SearchContainer}:hover &,
  ${SearchContainer}:focus-within & {
    width: 200px; /* Expand width smoothly */
    opacity: 1; /* Show input */
    visibility: visible; /* Make input visible */
  }
`;

export const SearchIcon = styled.div`
  position: absolute; /* Positioned within the container */
  right: 10px; /* Adjust position */
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  /* Optional: Add a background image */
  background-image: url("/search.png");
`;

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

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const MobileNavLink = styled(NavLink)`
  font-size: 1.2rem;
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