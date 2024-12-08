import { styled } from "styled-components";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-image: url("/gym.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const Content = styled.main`
  padding-top: 70px; // To account for the fixed navbar
`;
