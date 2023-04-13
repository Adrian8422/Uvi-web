import { FooterComponent } from "../../components/footer";
import React from "react";
import { HeaderComponent } from "../../components/header";
import { Root } from "./styled";

export function Layout({ children }: any) {
  return (
    <Root>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </Root>
  );
}
