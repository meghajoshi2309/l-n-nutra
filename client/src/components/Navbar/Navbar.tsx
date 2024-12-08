import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
  Overlay,
  MobileSearchContainerr,
  MobileSearchInput,
  MobileSearchIcon,
  MobileSearchInputt,
} from "../Navbar/Navbar.styled";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Blogs", href: "/blogs" },
];

// export const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchExpanded, setIsSearchExpanded] = useState(false);
//   const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
//   const [cartItemCount, setCartItemCount] = useState(2);
//   const [hasBorder, setHasBorder] = useState(false);
//   const [isSearchFocused, setIsSearchFocused] = useState(false);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const searchInputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (isMenuOpen || isMobileSearchOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [isMenuOpen, isMobileSearchOpen]);

//   const handleMenuClose = () => {
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (scrollRef.current) {
//         const scrollTop = scrollRef.current.scrollTop;
//         setHasBorder(scrollTop > 0);
//       }
//     };

//     const ref = scrollRef.current;
//     if (ref) {
//       ref.addEventListener("scroll", handleScroll);
//     }

//     return () => {
//       if (ref) {
//         ref.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   const handleSearchIconClick = () => {
//     if (searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   };

//   const handleSearchFocus = () => {
//     setIsSearchFocused(true);
//   };

//   const handleSearchBlur = () => {
//     setIsSearchFocused(false);
//   };

//   return (
//     <>
//       <NavbarContainer>
//         <MobileMenuButton onClick={() => setIsMenuOpen(true)}>
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="white"
//             strokeWidth="2"
//           >
//             <path d="M3 12h18M3 6h18M3 18h18" />
//           </svg>
//         </MobileMenuButton>

//         <LogoContainer>
//           <Link to="/">
//             <Logo src="/logo.jpeg" alt="Logo" />
//           </Link>
//         </LogoContainer>

//         <NavLinks>
//           {navItems.map((item) => (
//             <NavLink key={item.href} as={Link} to={item.href}>
//               {item.title}
//             </NavLink>
//           ))}
//         </NavLinks>

//         <RightSection>
//           <SearchContainer>
//             <SearchInput
//               type="text"
//               placeholder="Search here..."
//               ref={searchInputRef}
//               onFocus={handleSearchFocus}
//               onBlur={handleSearchBlur}
//             />
//             <SearchIcon onClick={handleSearchIconClick}>
//               <Image
//                 src="/search.png"
//                 alt="search icon"
//                 style={{ height: "20px", width: "20px" }}
//               />
//             </SearchIcon>
//           </SearchContainer>

//           <CartButton>
//             <img src="/cart.png" width="25" height="25" />
//             {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
//           </CartButton>

//           <LoginButton>Login</LoginButton>

//           {/* <button
//             className="lg:hidden md:hidden"
//             onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
//           >
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="white"
//               strokeWidth="2"
//             >
//               <circle cx="11" cy="11" r="8" />
//               <path d="M21 21l-4.35-4.35" />
//             </svg>
//           </button> */}
//         </RightSection>
//       </NavbarContainer>

//       <MobileMenu isOpen={isMenuOpen}>
//         <MobileMenuHeader>
//           <h2>Menu</h2>
//           <CloseButton onClick={handleMenuClose}>
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M18 6L6 18M6 6l12 12" />
//             </svg>
//           </CloseButton>
//         </MobileMenuHeader>
//         <MobileNavLinks>
//           {navItems.map((item) => (
//             <MobileNavLink
//               key={item.href}
//               as={Link}
//               to={item.href}
//               onClick={handleMenuClose}
//             >
//               {item.title}
//             </MobileNavLink>
//           ))}
//         </MobileNavLinks>
//       </MobileMenu>

//       <MobileSearchContainer isExpanded={isMobileSearchOpen}>
//         <div className="flex items-center gap-2">
//           <MobileSearchInput type="search" placeholder="Search..." autoFocus />
//           <button onClick={() => setIsMobileSearchOpen(false)}>
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M18 6L6 18M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//       </MobileSearchContainer>

//       <Overlay
//         isVisible={isMenuOpen || isMobileSearchOpen}
//         onClick={() => {
//           setIsMenuOpen(false);
//           setIsMobileSearchOpen(false);
//         }}
//       />
//     </>
//   );
// };

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(2);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMobileSearch = () => setIsMobileSearchOpen((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      <NavbarContainer>
        <div style={{display:"flex"}}>
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
            </svg>
          </MobileMenuButton>

          <MobileSearchContainerr>
            <MobileSearchIcon>
              <img src="/search.png" alt="Search Icon" width={20} height={20} />
            </MobileSearchIcon>
            <MobileSearchInputt type="text" placeholder="Search here..." />
          </MobileSearchContainerr>
        </div>
        {/* Logo */}
        <LogoContainer>
          <Link to="/">
            <Logo src="/logo.jpeg" alt="Logo" />
          </Link>
        </LogoContainer>

        {/* Desktop Nav Links */}
        <NavLinks>
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
          <LoginButton>Login</LoginButton>
          
          {/* Cart Icon */}
          <CartButton>
            <img src="/cart.png" alt="Cart Icon" width="25" height="25" />
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

      {/* Overlay */}
      <Overlay
        isVisible={isMenuOpen || isMobileSearchOpen}
        onClick={closeMenu}
      />
    </>
  );
};
