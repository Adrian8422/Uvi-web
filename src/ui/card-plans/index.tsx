import React from "react";
import { ContainerCard, TitlePlan, ListBullets, ULlist, Price } from "./styled";
import { ButtonPay } from "ui/button-pay";
import { useNavigate } from "react-router-dom";

export function CardPlan({
  serviceOne,
  serviceTwo,
  serviceThree,
  price,
  comprar,
  duration,
  plan,
}) {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact");
  };
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
      <ButtonPay event={handleContact} comprar={comprar} />
    </ContainerCard>
  );
}
