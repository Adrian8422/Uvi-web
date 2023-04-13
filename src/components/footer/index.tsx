import React from "react";
import { Footer, ContainerRedes, ContainerCopyright } from "./styled";

export function FooterComponent() {
  return (
    <Footer>
      <ContainerRedes>
        <a href="">
          <img src="./src/medias/linkedin-uvi.svg" alt="" />
        </a>
        <a href="">
          <img src="./src/medias/email-png.png" alt="" />
        </a>
      </ContainerRedes>
      <ContainerCopyright>
        <p style={{ fontSize: "13px" }}>©2023 Uvi info@uvi.com.ar</p>
      </ContainerCopyright>
    </Footer>
  );
}
