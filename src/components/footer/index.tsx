import React from "react";
import {
  Footer,
  ContainerRedes,
  ContainerCopyright,
  ContainerDevelop,
  ContainerRedAndCopy,
  ImgDv,
  PDev,
} from "./styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function FooterComponent() {
  const navigate = useNavigate();

  return (
    <Footer>
      <ContainerRedAndCopy>
        <ContainerRedes>
          <Link to="https://www.linkedin.com/company/universo-i/">
            <img src="./src/medias/linkedin-uvi.svg" alt="" />
          </Link>

          <img src="./src/medias/email-png.png" alt="" />
        </ContainerRedes>
        <ContainerCopyright>
          <p style={{ fontSize: "13px" }}>©2023 Uvi info@uvi.com.ar</p>
        </ContainerCopyright>
      </ContainerRedAndCopy>
      <ContainerDevelop>
        <PDev>Desarrollado por Adrián Villegas ©2023</PDev>
        <Link to="https://www.linkedin.com/in/adrian-villegas-tag/">
          <ImgDv src="./src/medias/linkedin-uvi.svg" alt="" />
        </Link>
      </ContainerDevelop>
    </Footer>
  );
}
