import React from "react";
import {
  Section,
  Img,
  ContainerAboutOurs,
  FullTextAboutOurs,
  ShortTextAboutOurs,
  Button,
  Title,
  AHyper,
  ContainerImage,
} from "./styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AboutOurs() {
  const navigate = useNavigate();

  const activeOrDisable = () => {
    navigate("/about-our");
  };

  return (
    <Section>
      <ContainerAboutOurs>
        <Title>Sobre nosotros</Title>
        <ShortTextAboutOurs>
          Nuestra empresa ofrece soluciones integrales en recursos humanos a
          empresas de todos los tamaños y sectores. Nuestro equipo altamente
          capacitado trabaja con un enfoque personalizado para entender las
          necesidades de cada cliente y ofrecer soluciones que ayuden a
          optimizar sus procesos y alcanzar sus objetivos.
        </ShortTextAboutOurs>
        <Button onClick={activeOrDisable}>Leér más</Button>
      </ContainerAboutOurs>
      <ContainerImage>
        <Img src="./src/medias/imagehumanos.webp" alt="" />
      </ContainerImage>
    </Section>
  );
}
