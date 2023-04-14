import React from "react";
import useRouter from "react-router-dom";
import {
  Header,
  ContainerHyper,
  LinkA,
  ContainerImg,
  ImageHeader,
} from "./styled.";
import { useNavigate } from "react-router-dom";
const logo = require("../../medias/uvi.png");
console.log({ logo });

export function HeaderComponent() {
  const navigate = useNavigate();
  const handleService = () => {
    navigate("/services");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleAboutOurs = () => {
    navigate("/about-our");
  };

  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <Header>
      {
        <ContainerImg onClick={handleHome}>
          <ImageHeader
            style={{ paddingLeft: "8px" }}
            src="./src/medias/uvi.png"
          />
        </ContainerImg>
      }
      <ContainerHyper>
        <LinkA onClick={handleService}>Servicios</LinkA>
        <LinkA onClick={handleAboutOurs}>Descripcion</LinkA>
        <LinkA onClick={handleContact}>Contacto</LinkA>
      </ContainerHyper>
    </Header>
  );
}
