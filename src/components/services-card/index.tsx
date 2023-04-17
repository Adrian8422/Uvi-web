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
import { useNavigate } from "react-router-dom";
import { ButtonMobile } from "ui/button-service-mobile";

export function ServicesCard({
  media,
  service,
  text,
  typeAlignText,
  colorBackground,
  alignItems,
}) {
  const navigate = useNavigate();
  const handlePageService = () => {
    navigate("/services");
  };
  return (
    <ContainerServiceCard alignItems={alignItems}>
      <ContainerImageCard>
        <Img src={media} />
      </ContainerImageCard>
      <ContainerTextCard textAlign={typeAlignText}>
        <TitleService>{service}</TitleService>
        <TextService>{text}</TextService>
      </ContainerTextCard>
      <ContainerButton>
        <ButtonMobile
          colorBackgound={colorBackground}
          text={"Ver más"}
          event={handlePageService}
        />
        <ButtonCard onClick={handlePageService}>Ver más</ButtonCard>
      </ContainerButton>
    </ContainerServiceCard>
  );
}
