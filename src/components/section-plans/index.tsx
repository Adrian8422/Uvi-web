import React from "react";
import { SectionPlans, TitlePlan, ContainerSection } from "./styled";
import { useState } from "react";
import { CardPlan } from "ui/card-plans";

export function SectionPlan() {
  return (
    <ContainerSection>
      <TitlePlan>Tipos de planes</TitlePlan>
      <SectionPlans>
        <CardPlan
          plan={"Plan uno"}
          serviceOne={"Revisión de currículum"}
          serviceTwo={"Asesoramiento de entrevistas"}
          serviceThree={"Evaluación de habilidades"}
        />
        <CardPlan
          plan={"Plan dos"}
          serviceOne={"Desarrollo de carrera"}
          serviceTwo={"Networking"}
          serviceThree={"Gestión de conflictos"}
        />
        <CardPlan
          plan={"Plan tres"}
          serviceOne={"Habilidades de liderazgo"}
          serviceTwo={"Coaching personalizado"}
          serviceThree={"Gestión del tiempo"}
        />
      </SectionPlans>
    </ContainerSection>
  );
}
