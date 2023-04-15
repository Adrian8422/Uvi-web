import Carousel from "nuka-carousel";
import React from "react";
import {
  ContainerTextAboutOur,
  ContainerImgUvi,
  ImgUvi,
  TitleQuienesSomos,
  ContainerTextAndImages,
  ContainerImageAbout,
  ImageAbout,
} from "./styled";

export function AboutOursPage() {
  return (
    <ContainerTextAboutOur>
      <ContainerImgUvi>
        <TitleQuienesSomos>Quienes somos?</TitleQuienesSomos>
        <ImgUvi src="./src/medias/logo-uvi-big.png" alt="" />
      </ContainerImgUvi>
      <ContainerTextAndImages>
        <p style={{ maxWidth: "636px" }}>
          En UVI, brindamos servicios integrales de recursos humanos para ayudar
          a las empresas a manejar sus recursos de manera efectiva y eficiente.
          Nos enfocamos en la selección de personal, capacitación y desarrollo,
          consultoría en recursos humanos y asesoramiento legal. Nuestro
          objetivo es ser un aliado estratégico para nuestros clientes en el
          área de recursos humanos, contribuyendo al crecimiento y éxito de sus
          empresas.
          <br />
          <br />
          Nos aseguramos de que nuestros clientes contraten a los mejores
          candidatos para cada puesto vacante, brindamos servicios de
          capacitación y desarrollo personalizados para cada empresa, y
          ofrecemos consultoría en recursos humanos y asesoramiento legal para
          ayudar a las empresas a establecer políticas y procedimientos
          efectivos para administrar su personal.
          <br />
          <br />
          En UVI, nuestro compromiso es ofrecer un servicio de calidad
          excepcional y ser un socio confiable y a largo plazo para nuestros
          clientes. Nos enfocamos en construir relaciones sólidas con nuestros
          clientes y en comprender sus necesidades y objetivos para poder
          brindar soluciones personalizadas y efectivas en el área de recursos
          humanos.
          <br />
          <br />
        </p>
        <Carousel
          className="carouselHome"
          cellAlign={"center"}
          slideIndex={1}
          wrapAround={true}
          autoplay={true}
          showNavButtons={false}
          style={{ width: "250px" }}
        >
          <ContainerImageAbout>
            <ImageAbout src="./src/medias/aboutour1.jpg" alt="" />
          </ContainerImageAbout>
          <ContainerImageAbout>
            <ImageAbout src="./src/medias/aboutour2.jpg" alt="" />
          </ContainerImageAbout>
          <ContainerImageAbout>
            <ImageAbout src="./src/medias/aboutour3.jpg" alt="" />
          </ContainerImageAbout>
        </Carousel>
      </ContainerTextAndImages>
    </ContainerTextAboutOur>
  );
}
