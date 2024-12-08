import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { LayoutWrapper ,Content} from "./Layout.styled";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <Content>{children}</Content>
    </LayoutWrapper>
  );
};
