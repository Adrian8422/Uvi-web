import React, { useState } from "react";
import useRouter from "react-router-dom";
import {
  Header,
  ContainerHyper,
  LinkA,
  ContainerImg,
  ImageHeader,
} from "./styled.";
import { useNavigate } from "react-router-dom";
import { ButtonBurger } from "ui/button-burger";
const logo = require("../../medias/uvi.png");
console.log({ logo });

export function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
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
  const handleToggle = () => {
    if (isOpen == false) {
      setIsOpen(true);
    } else if (isOpen == true) {
      setIsOpen(false);
    }
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

      <ButtonBurger
        eventServices={handleService}
        eventContact={handleContact}
        eventDescription={handleAboutOurs}
        event={handleToggle}
        isOpen={isOpen}
      />
      <ContainerHyper>
        <LinkA onClick={handleService}>Servicios</LinkA>
        <LinkA onClick={handleAboutOurs}>Descripcion</LinkA>
        <LinkA onClick={handleContact}>Contacto</LinkA>
      </ContainerHyper>
    </Header>
  );
}
