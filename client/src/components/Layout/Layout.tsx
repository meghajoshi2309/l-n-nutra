import React from "react";
import { LayoutWrapper, Content } from "./Layout.styled";
import { Navbar } from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export const Layout: React.FC = () => {
  return (
    <>
      <LayoutWrapper>
        <Navbar />
        <Content>
          <Outlet /> {/* This will render child routes */}
        </Content>
      </LayoutWrapper>
      <Footer />
    </>
  );
};
