import { FormContact } from "components/form-contact";
import React from "react";
import {
  ContainerPageFormContact,
  ContainerTextContactPage,
  ContainerTextAndImg,
  TextContact,
  ImgContactUVI,
} from "./styled";

export function ComponentPageForm() {
  return (
    <ContainerPageFormContact>
      <ContainerTextAndImg>
        <ImgContactUVI src="./src/medias/logo-uvi-big.png" alt="" />
        <ContainerTextContactPage>
          <h1 style={{ color: "#bababa" }}>Comunicate con nosotros!</h1>
          <TextContact>
            Llená el formulario con tus datos para que te contactamos. Te vamos
            a comentar más sobre el plan y sus características. Saludos. Equipo
            UVI.
          </TextContact>
        </ContainerTextContactPage>
      </ContainerTextAndImg>
      <FormContact />
    </ContainerPageFormContact>
  );
}
