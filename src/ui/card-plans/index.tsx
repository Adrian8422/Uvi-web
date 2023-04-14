import React from "react";
import { ContainerCard, TitlePlan, ListBullets, ULlist, Price } from "./styled";

export function CardPlan({
  serviceOne,
  serviceTwo,
  serviceThree,
  price,
  duration,
  plan,
}) {
  return (
    <ContainerCard>
      <TitlePlan>{plan}</TitlePlan>
      <ULlist>
        <ListBullets>{serviceOne}</ListBullets>
        <ListBullets>{serviceTwo}</ListBullets>
        <ListBullets>{serviceThree}</ListBullets>
        <ListBullets>{duration}</ListBullets>
        <ListBullets>{price}</ListBullets>
      </ULlist>
      <Price>$12000</Price>
    </ContainerCard>
  );
}
