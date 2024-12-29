import { styled } from "styled-components";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  /* background-image: url("/gym.jpg"); */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* background-color: black; */
`;

export const Content = styled.main`
   padding-top: 70px; // To account for the fixed navbar
   flex: 1;
`;
