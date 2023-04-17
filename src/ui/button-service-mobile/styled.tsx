import styled from "styled-components";

export const ButtonMobileComp = styled.button`
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  height: 45px;
  width: 150px;
  @media (min-width: 700px) {
    display: none;
  }
`;
