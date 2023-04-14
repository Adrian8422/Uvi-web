import React from "react";
import { ContainerCard, TitlePlan, ListBullets, ULlist, Price } from "./styled";
import { ButtonPay } from "ui/button-pay";

export function CardPlan({
  serviceOne,
  serviceTwo,
  serviceThree,
  price,
  comprar,
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
      <ButtonPay comprar={comprar} />
    </ContainerCard>
  );
}
