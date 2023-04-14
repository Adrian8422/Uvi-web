import React from "react";

export function ButtonPay({ comprar, event }) {
  return (
    <div onClick={event} href="#" className="button">
      <div className="button__line"></div>
      <div className="button__line"></div>
      <span className="button__text">{comprar}</span>
      <div className="button__drow1"></div>
      <div className="button__drow2"></div>
    </div>
  );
}
