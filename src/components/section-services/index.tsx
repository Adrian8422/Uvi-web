import { ServicesCard } from "components/services-card";

import React from "react";
import { ContainerService } from "./styled";
export function ServicesSection() {
  return (
    <div>
      <ContainerService>
        <ServicesCard />
        <ServicesCard />
      </ContainerService>
      <ContainerService>
        <ServicesCard />
        <ServicesCard />
      </ContainerService>
    </div>
  );
}
