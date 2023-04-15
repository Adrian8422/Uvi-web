import { ServicesCard } from "components/services-card";
import Carousel from "nuka-carousel";

import React from "react";
import {
  ContainerSectionServices,
  ContainerService,
  ContainerWithoutCarousel,
  ContainerWithCarousel,
} from "./styled";
console.log({ Carousel });
export function ServicesSection() {
  return (
    <ContainerSectionServices>
      <ContainerWithCarousel>
        <Carousel
          cellAlign={"center"}
          slideIndex={1}
          wrapAround={true}
          autoplay={true}
          showNavButtons={false}
        >
          <ContainerService>
            <ServicesCard
              service={"Servicios de contratación:"}
              media={"./src/medias/rec-hum.jpg"}
              text={
                "Ayudamos a las empresas a encontrar y contratar a los mejores candidatos para sus vacantes."
              }
            />
            <ServicesCard
              service={"Capacitación y Desarrollo"}
              media={"./src/medias/rec-2.jpg"}
              text={
                "Ofrecemos programas de capacitación y desarrollo para mejorar las habilidades y conocimientos de los empleados."
              }
            />
          </ContainerService>
          <ContainerService>
            <ServicesCard
              service={"Administración de Nómina"}
              media={"./src/medias/rec-5.jpg"}
              text={
                "Nos encargamos de todo lo relacionado con la administración de la nómina de los empleados."
              }
            />
            <ServicesCard
              service={"Servicios de Outplacemen"}
              media={"./src/medias/rec-4.jpg"}
              text={
                "Ayudamos a los empleados a hacer la transición de un trabajo a otro a través de servicios de outplacement."
              }
            />
          </ContainerService>
        </Carousel>
      </ContainerWithCarousel>
      <ContainerWithoutCarousel>
        <ContainerService>
          <ServicesCard
            service={"Servicios de contratación:"}
            media={"./src/medias/rec-hum.jpg"}
            text={
              "Ayudamos a las empresas a encontrar y contratar a los mejores candidatos para sus vacantes."
            }
          />
          <ServicesCard
            service={"Capacitación y Desarrollo"}
            media={"./src/medias/rec-2.jpg"}
            text={
              "Ofrecemos programas de capacitación y desarrollo para mejorar las habilidades y conocimientos de los empleados."
            }
          />
        </ContainerService>
        <ContainerService>
          <ServicesCard
            service={"Administración de Nómina"}
            media={"./src/medias/rec-5.jpg"}
            text={
              "Nos encargamos de todo lo relacionado con la administración de la nómina de los empleados."
            }
          />
          <ServicesCard
            service={"Servicios de Outplacemen"}
            media={"./src/medias/rec-4.jpg"}
            text={
              "Ayudamos a los empleados a hacer la transición de un trabajo a otro a través de servicios de outplacement."
            }
          />
        </ContainerService>
      </ContainerWithoutCarousel>
    </ContainerSectionServices>
  );
}
