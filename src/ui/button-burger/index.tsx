import React from "react";
import {
  BurgerLines,
  BurgerMenu,
  MenuContainer,
  ContainerLinks,
  LinkTo,
} from "./styled";

export function ButtonBurger({
  isOpen,
  event,
  eventServices,
  eventContact,
  eventDescription,
}) {
  return (
    <div>
      <BurgerMenu onClick={event}>
        <BurgerLines isOpen={isOpen} />
        <BurgerLines isOpen={isOpen} />
        <BurgerLines isOpen={isOpen} />
      </BurgerMenu>
      <MenuContainer isOpen={isOpen}>
        <ContainerLinks>
          <LinkTo onClick={eventServices} href="">
            Servicios
          </LinkTo>
          <LinkTo onClick={eventDescription} href="">
            Descripcion
          </LinkTo>
          <LinkTo onClick={eventContact} href="">
            Contacto
          </LinkTo>
        </ContainerLinks>
      </MenuContainer>
    </div>
  );
}
