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

export function AboutOurs() {
  const [fullText, setFulltext] = useState(false);

  const activeOrDisable = () => {
    if (fullText == false) {
      setFulltext(true);
    } else if (fullText == true) {
      setFulltext(false);
    }
  };
  const styleAboutOursShorText = {
    display: fullText == false ? "flex" : "none",
  };
  const styleAboutOursFullText = {
    display: fullText == true ? "flex" : "none",
  };
  return (
    <Section>
      <ContainerAboutOurs>
        <Title>Sobre nosotros</Title>
        <ShortTextAboutOurs style={styleAboutOursShorText}>
          Nuestra empresa ofrece soluciones integrales en recursos humanos a
          empresas de todos los tamaños y sectores. Nuestro equipo altamente
          capacitado trabaja con un enfoque personalizado para entender las
          necesidades de cada cliente y ofrecer soluciones que ayuden a
          optimizar sus procesos y alcanzar sus objetivos.
        </ShortTextAboutOurs>
        <Button style={styleAboutOursShorText} onClick={activeOrDisable}>
          Leér más
        </Button>

        <FullTextAboutOurs style={styleAboutOursFullText}>
          Nuestra empresa ofrece soluciones integrales en recursos humanos a
          empresas de todos los tamaños y sectores. Nuestro equipo altamente
          capacitado trabaja con un enfoque personalizado para entender las
          necesidades de cada cliente y ofrecer soluciones que ayuden a
          optimizar sus procesos y alcanzar sus objetivos. Ofrecemos servicios
          como selección de personal, capacitación, consultoría en recursos
          humanos. Y utilizamos tecnología de última generación para garantizar
          la eficiencia y calidad de sus servicios. El objetivo de la empresa es
          ser un aliado estratégico para los clientes en el área de recursos
          humanos y contribuir al crecimiento y éxito de sus empresas.
        </FullTextAboutOurs>
        <AHyper style={styleAboutOursFullText} onClick={activeOrDisable}>
          Ver menos
        </AHyper>
      </ContainerAboutOurs>
      <ContainerImage>
        <Img src="./src/medias/imagehumanos.webp" alt="" />
      </ContainerImage>
    </Section>
  );
}
