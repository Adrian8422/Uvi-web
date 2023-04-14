import React from "react";
import {
  ContainerServiceCard,
  ContainerTextCard,
  ContainerImageCard,
  ButtonCard,
  Img,
} from "./styled";

export function ServicesCard({ media, service, text }) {
  return (
    <ContainerServiceCard>
      <ContainerImageCard>
        <Img src={media} />
      </ContainerImageCard>
      <ContainerTextCard>
        <h1>{service}</h1>
        <p>{text}</p>
      </ContainerTextCard>
      <ButtonCard>Vér más</ButtonCard>
    </ContainerServiceCard>
  );
}
