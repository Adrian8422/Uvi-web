import React from "react";
import {
  ContainerServiceCard,
  ContainerTextCard,
  ContainerImageCard,
} from "./styled";

export function ServicesCard() {
  return (
    <ContainerServiceCard>
      <ContainerImageCard>
        <img src="" alt="" />
      </ContainerImageCard>
      <ContainerTextCard>
        <h1>Example de servicio</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae porro
          quod nulla temporibus rerum deleniti saepe reiciendis praesentium et,
          modi, nisi illum perferendis repellat, vitae velit. Natus libero
          molestiae laboriosam?
        </p>
      </ContainerTextCard>
    </ContainerServiceCard>
  );
}
