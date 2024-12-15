import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  NavbarContainer,
  LogoContainer,
  Logo,
  NavLinks,
  NavLink,
  RightSection,
  SearchContainer,
  SearchInput,
  SearchIcon,
  CartButton,
  CartCount,
  LoginButton,
  MobileMenuButton,
  MobileMenu,
  MobileMenuHeader,
  CloseButton,
  MobileNavLinks,
  MobileNavLink,
  MobileSearchContainer,
  MobileSearchIcon,
  MobileSearchModal,
  MobileSearchInputContainer,
  MobileSearchInput,
  MobileSearchActions,
  MobileSearchCloseButton,
  LogoText,
} from "../Navbar/Navbar.styled";
import { useIsMobile } from "../../Hook/isMobileView";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Blogs", href: "/blogs" },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(2);
  const [hasBorder, setHasBorder] = useState(false);

  const isMobile = useIsMobile();

  const navigate = useNavigate();

  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMobileSearch = () => setIsMobileSearchOpen((prev) => !prev);
  const closeMobileSearch = () => { setIsMobileSearchOpen(false) };

  useEffect(() => {
    const handleScroll = () => {
      setHasBorder(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  return (
    <>
      {/* Navbar */}
      <NavbarContainer>
        <div style={{ display: "flex", alignItems: 'center' }}>
          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={toggleMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>&nbsp;&nbsp;&nbsp;
          </MobileMenuButton>

          <MobileSearchContainer>
            <MobileSearchIcon
              onClick={toggleMobileSearch}
            >
              <img src="/search.png" alt="Search Icon" width={20} height={20} />
            </MobileSearchIcon>
            {/* Mobile Search Overlay */}
            {isMobileSearchOpen && (
              <MobileSearchModal>
                <MobileSearchInputContainer>
                  <MobileSearchInput
                    type="text"
                    placeholder="Search here..."
                    autoFocus
                  />
                  <MobileSearchActions>
                    <MobileSearchIcon>
                      <img src="/search.png" alt="Search Icon" width={20} height={20} />
                    </MobileSearchIcon>
                    <MobileSearchCloseButton onClick={closeMobileSearch}>
                      ✕
                    </MobileSearchCloseButton>
                  </MobileSearchActions>
                </MobileSearchInputContainer>
              </MobileSearchModal>
            )}
          </MobileSearchContainer>
        </div>
        {/* Logo */}
        <LogoContainer>
          <Link to="/">
            <Logo src="/logo.jpeg" alt="Logo" />
          </Link>&nbsp;
          <LogoText>L-N Nutra</LogoText>
        </LogoContainer>

        {/* Desktop Nav Links */}
        <NavLinks hasBorder={hasBorder}>
          {navItems.map((item) => (
            <NavLink key={item.href} as={Link} to={item.href}>
              {item.title}
            </NavLink>
          ))}
        </NavLinks>

        {/* Right Section (Search, Profile, Cart) */}
        <RightSection>
          <SearchContainer>
            <SearchInput type="text" placeholder="Search here..." />
            <SearchIcon>
              <img src="/search.png" alt="Search Icon" width={20} height={20} />
            </SearchIcon>
          </SearchContainer>

          {/* Profile Icon */}
          {isMobile ? (
            <img src="/profile.png" alt="Profile" width={25} height={25} onClick={() => navigate('/login')} />
          ) : (
            <LoginButton onClick={() => navigate('/login')}>Login</LoginButton>
          )}

          {/* Cart Icon */}
          <CartButton>
            <img src="/cart.png" alt="Cart Icon" width="25" height="25" onClick={() => navigate("/cart")} />
            {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
          </CartButton>
        </RightSection>
      </NavbarContainer>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen}>
        <MobileMenuHeader>
          <h2>Menu</h2>
          <CloseButton onClick={closeMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </CloseButton>
        </MobileMenuHeader>
        <MobileNavLinks>
          {navItems.map((item) => (
            <MobileNavLink
              key={item.href}
              as={Link}
              to={item.href}
              onClick={closeMenu}
            >
              {item.title}
            </MobileNavLink>
          ))}
        </MobileNavLinks>
      </MobileMenu>
    </>
  );
};
