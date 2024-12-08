import React from "react";
import { LayoutWrapper ,Content} from "./Layout.styled";
import { Navbar } from "../Navbar/Navbar";

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
