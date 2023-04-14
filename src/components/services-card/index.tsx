import React from "react";
import {
  ContainerServiceCard,
  ContainerTextCard,
  ContainerImageCard,
  ButtonCard,
  Img,
  TextService,
  TitleService,
  ContainerButton,
} from "./styled";

export function ServicesCard({ media, service, text }) {
  return (
    <ContainerServiceCard>
      <ContainerImageCard>
        <Img src={media} />
      </ContainerImageCard>
      <ContainerTextCard>
        <TitleService>{service}</TitleService>
        <TextService>{text}</TextService>
      </ContainerTextCard>
      <ContainerButton>
        <ButtonCard>Vér más</ButtonCard>
      </ContainerButton>
    </ContainerServiceCard>
  );
}
