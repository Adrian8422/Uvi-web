import React from "react";

export function ButtonPay({ comprar }) {
  return (
    <a href="#" className="button">
      <div className="button__line"></div>
      <div className="button__line"></div>
      <span className="button__text">{comprar}</span>
      <div className="button__drow1"></div>
      <div className="button__drow2"></div>
    </a>
  );
}
