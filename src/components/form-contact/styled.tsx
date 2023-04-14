import styled from "styled-components";

export const FormContactUVI = styled.form`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-around;
  padding: 10px;
  background: linear-gradient(
    338deg,
    rgb(156, 39, 176) 29.35%,
    rgb(106, 58, 183) 78.73%
  );
  width: 43%;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

export const InputFormUVI = styled.input`
  border-radius: 4px;
  width: 100%;
  height: 35px;
  border: none;
`;

export const LabelFormUVI = styled.label`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const InputArchiveAdj = styled.input`
  width: 100%;
`;
export const SelectFormUvi = styled.select`
  border-radius: 4px;
  height: 35px;
  border: none;
  width: 100%;
`;

export const ButtonFormUVI = styled.button`
  cursor: pointer;
  border-radius: 5px;
  height: 40px;
  background-color: #ffffff21;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 7px 16px 0px,
    rgba(0, 0, 0, 0.07) 0px 1px 3px 0px;
  border: none;
  width: 120px;

  &:hover {
    transform: translate(0, -2px);
    transition: 0.5s ease-out;
    box-shadow: 0 8px 19px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
  }
`;
