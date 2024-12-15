// //// gatgpt

// // Import necessary libraries
// import React from "react";
// import styled from "styled-components";

// // Styled Components
// const FooterContainer = styled.footer`
//   background-color: #222;
//   color: #fff;
//   padding: 20px 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: space-between;
//     padding: 40px 60px;
//   }
// `;

// const Column = styled.div`
//   margin: 10px 0;
//   text-align: center;

//   @media (min-width: 768px) {
//     margin: 0 20px;
//     text-align: left;
//   }
// `;

// const Title = styled.h4`
//   margin-bottom: 10px;
//   font-size: 1.2em;
// `;

// const LinkList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const LinkItem = styled.li`
//   margin: 5px 0;

//   a {
//     color: #fff;
//     text-decoration: none;
//     font-size: 0.9em;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const Copyright = styled.div`
//   margin-top: 20px;
//   font-size: 0.8em;
//   text-align: center;

//   @media (min-width: 768px) {
//     margin-top: 0;
//     text-align: right;
//   }
// `;

// // Footer Component
// const Footer = () => {
//   return (
//     <FooterContainer>
//       <Column>
//         <Title>Shop</Title>
//         <LinkList>
//           <LinkItem><a href="#">Men</a></LinkItem>
//           <LinkItem><a href="#">Women</a></LinkItem>
//           <LinkItem><a href="#">Kids</a></LinkItem>
//           <LinkItem><a href="#">Sale</a></LinkItem>
//         </LinkList>
//       </Column>

//       <Column>
//         <Title>Help</Title>
//         <LinkList>
//           <LinkItem><a href="#">Customer Service</a></LinkItem>
//           <LinkItem><a href="#">Returns</a></LinkItem>
//           <LinkItem><a href="#">Shipping Info</a></LinkItem>
//           <LinkItem><a href="#">FAQs</a></LinkItem>
//         </LinkList>
//       </Column>

//       <Column>
//         <Title>About</Title>
//         <LinkList>
//           <LinkItem><a href="#">Our Story</a></LinkItem>
//           <LinkItem><a href="#">Careers</a></LinkItem>
//           <LinkItem><a href="#">Sustainability</a></LinkItem>
//           <LinkItem><a href="#">Press</a></LinkItem>
//         </LinkList>
//       </Column>

//       <Copyright>
//         &copy; {new Date().getFullYear()} Your E-Commerce Site. All rights reserved.
//       </Copyright>
//     </FooterContainer>
//   );
// };

// export default Footer;





























// Deepseek


import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 20px 0;
  font-family: Arial, sans-serif;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 10px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: 20px; */

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    color: #00bcd4;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <FooterTitle>About Us</FooterTitle>
                    <FooterLink href="/about">Our Story</FooterLink>
                    <FooterLink href="/team">Our Team</FooterLink>
                    <FooterLink href="/careers">Careers</FooterLink>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Customer Service</FooterTitle>
                    <FooterLink href="/contact">Contact Us</FooterLink>
                    <FooterLink href="/faq">FAQ</FooterLink>
                    <FooterLink href="/returns">Returns</FooterLink>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Quick Links</FooterTitle>
                    <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                    <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
                    <FooterLink href="/shipping">Shipping Information</FooterLink>
                </FooterSection>
            </FooterContent>

            <SocialIcons>
                <SocialIcon>
                    <img src='/facebook.svg' alt='facebook' />
                </SocialIcon>
                <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src='./instagram.svg' alt='instagram' />
                </SocialIcon>
                <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src='./twitter.svg' alt='twitter' />
                </SocialIcon>
            </SocialIcons>
        </FooterContainer>
    );
};

export default Footer;