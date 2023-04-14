import { FormContact } from "components/form-contact";
import React from "react";
import {
  ContainerPageFormContact,
  ContainerTextContactPage,
  ContainerTextAndImg,
  ImgContactUVI,
} from "./styled";

export function ComponentPageForm() {
  return (
    <ContainerPageFormContact>
      <ContainerTextAndImg>
        <ImgContactUVI src="./src/medias/logo-uvi-big.png" alt="" />
        <ContainerTextContactPage>
          <h1>Comunicate con nosotros!</h1>
          <h4>
            Llená el formulario con tus datos para que te contactamos. Te vamos
            a comentar más sobre el plan y sus características. Saludos. Equipo
            UVI.
          </h4>
        </ContainerTextContactPage>
      </ContainerTextAndImg>
      <FormContact />
    </ContainerPageFormContact>
  );
}
