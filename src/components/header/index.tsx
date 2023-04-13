import React from "react";
import {
  Header,
  ContainerHyper,
  LinkA,
  ContainerImg,
  ImageHeader,
} from "./styled.";
const logo = require("../../medias/uvi.png");
console.log({ logo });

export function HeaderComponent() {
  return (
    <Header>
      {
        <ContainerImg>
          <ImageHeader
            style={{ paddingLeft: "8px" }}
            src="./src/medias/uvi.png"
          />
        </ContainerImg>
      }
      <ContainerHyper>
        <LinkA>Servicios</LinkA>
        <LinkA>Descripcion</LinkA>
        <LinkA>Contacto</LinkA>
      </ContainerHyper>
    </Header>
  );
}
