import React from "react";
import {
  FormContactUVI,
  InputFormUVI,
  LabelFormUVI,
  InputArchiveAdj,
  SelectFormUvi,
  ButtonFormUVI,
} from "./styled";
import { useNavigate } from "react-router-dom";

export function FormContact() {
  const navigate = useNavigate();
  const handleData = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const cellphone = e.target.cellphone.value;
    const plan = e.target.plan.value;

    console.log({ email, name, cellphone, plan });
    alert("Enviamos el mensaje");
    navigate("/");
  };
  return (
    <FormContactUVI enctype="multipart/form-data" onSubmit={handleData}>
      <LabelFormUVI htmlFor="">
        <InputFormUVI
          type="text"
          placeholder={"Ingrese su email"}
          name="email"
        />
      </LabelFormUVI>
      <LabelFormUVI htmlFor="">
        <InputFormUVI
          type="text"
          placeholder={"Ingrese su nombre"}
          name="name"
        />
      </LabelFormUVI>
      <LabelFormUVI htmlFor="">
        <InputFormUVI
          type="text"
          placeholder={"Ingrese su teléfono"}
          name="cellphone"
        />
      </LabelFormUVI>
      <LabelFormUVI htmlFor="">
        <h4>Ingrese su archivo:</h4>
        <InputArchiveAdj type="file" id="archivo" name="archivo" />
      </LabelFormUVI>

      <SelectFormUvi placeholder={"Ingrese el plan que seleccionó"} name="plan">
        <option value="">Seleccione el plan que desea</option>
        <option value="basico">Básico</option>
        <option value="intermedio">Intermedio</option>
        <option value="avanzado">Avanzado</option>
      </SelectFormUvi>

      <ButtonFormUVI>Enviar</ButtonFormUVI>
    </FormContactUVI>
  );
}
