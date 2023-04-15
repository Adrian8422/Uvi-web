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
          UVI es una empresa que se dedica a brindar servicios integrales de
          recursos humanos para empresas que buscan manejar sus recursos de
          manera efectiva y eficiente. Nos especializamos en servicios como la
          selección de personal, capacitación y desarrollo, consultoría en
          recursos humanos y asesoramiento legal, con el objetivo de ser un
          aliado estratégico para nuestros clientes en el área de recursos
          humanos, contribuyendo al crecimiento y éxito de sus empresas.
          <br />
          <br />
          En UVI, nos aseguramos de que nuestros clientes tengan acceso a los
          mejores candidatos para cada puesto vacante, brindando servicios de
          capacitación y desarrollo personalizados para cada empresa. Además,
          ofrecemos consultoría en recursos humanos y asesoramiento legal para
          ayudar a las empresas a establecer políticas y procedimientos
          efectivos para administrar su personal, lo que nos permite garantizar
          que las empresas estén en cumplimiento con las regulaciones laborales
          y que puedan optimizar sus procesos internos.
          <br />
          <br />
          En UVI, nuestro compromiso es ofrecer un servicio de calidad
          excepcional y ser un socio confiable y a largo plazo para nuestros
          clientes. Trabajamos para construir relaciones sólidas con nuestros
          clientes y para comprender sus necesidades y objetivos. Nos enfocamos
          en brindar soluciones personalizadas y efectivas en el área de
          recursos humanos, con el fin de asegurar el éxito de nuestros clientes
          en el largo plazo.
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
