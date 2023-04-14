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

export function ServicesCard({ media, service, text }) {
  const navigate = useNavigate();
  const handlePageService = () => {
    navigate("/services");
  };
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
        <ButtonCard onClick={handlePageService}>Vér más</ButtonCard>
      </ContainerButton>
    </ContainerServiceCard>
  );
}
