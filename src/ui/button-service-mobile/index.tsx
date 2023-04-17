import React from "react";
import { ButtonMobileComp } from "./styled";

export function ButtonMobile({ text, event, colorBackgound }) {
  return (
    <ButtonMobileComp backgroundColor={colorBackgound} onClick={event}>
      {text}
    </ButtonMobileComp>
  );
}
