import styled from "styled-components";
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    338deg,
    rgb(156, 39, 176) 29.35%,
    rgb(106, 58, 183) 78.73%
  );
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
  @media (min-width: 490px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ContainerRedes = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  justify-content: space-between;
`;
export const ContainerCopyright = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: space-between;
  color: white;
`;
