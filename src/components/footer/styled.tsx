import styled from "styled-components";
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    343deg,
    rgb(68 40 112 / 93%) 29.35%,
    rgb(92 58 183) 78.73%
  );
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
  @media (min-width: 490px) {
    flex-direction: column;
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
export const ContainerDevelop = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
`;

export const ContainerRedAndCopy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: inherit;
    align-items: flex-end;
  }
`;
export const PDev = styled.p`
  font-size: 10px;
`;
export const ImgDv = styled.img`
  width: 20px;
`;
