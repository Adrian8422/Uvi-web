import styled from "styled-components";

export const ContainerPageFormContact = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(
    107deg,
    rgb(67 28 72) 29.35%,
    rgb(106, 58, 183) 78.73%
  );
  @media (min-width: 700px) {
    justify-content: space-around;
    padding: 50px;
  }
`;
export const ContainerTextAndImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ContainerTextContactPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;
export const ImgContactUVI = styled.img`
  display: none;
  @media (min-width: 700px) {
    display: flex;
  }
`;
