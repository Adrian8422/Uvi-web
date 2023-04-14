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
          comprar={"comprar"}
          plan={"Plan Básico"}
          serviceOne={"Capacitación en reclutamiento"}
          serviceTwo={"Acceso a recursos y herramientas en línea"}
          serviceThree={"Técnicas desarrollo"}
          duration={"Duración: 1 mes"}
          price={"Precio: $29 USD."}
        />
        <CardPlan
          comprar={"comprar"}
          plan={"Plan Intermedio"}
          serviceOne={"Capacitación en reclutamiento"}
          serviceTwo={"Asesoramiento personalizado en línea (3 sesiones)"}
          serviceThree={"Acceso a recursos y herramientas en línea."}
          duration={"Duración: 3 meses."}
          price={"Precio: $79 USD."}
        />
        <CardPlan
          comprar={"comprar"}
          plan={"Plan Avanzado"}
          serviceOne={"Capacitación en reclutamiento"}
          serviceTwo={"Acceso a recursos y herramientas en línea"}
          serviceThree={"Certificación en Gestión del Talento"}
          duration={"Duración: 6 meses."}
          price={"Precio: $149 USD."}
        />
      </SectionPlans>
    </ContainerSection>
  );
}
