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
    164deg,
    rgb(40 28 72 / 76%) 29.35%,
    rgb(55 43 81) 78.73%
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
  transition: transform 0.3s ease;
  :hover {
    transform: translateY(-10px);
  }
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
    filter: drop-shadow(1px 3px 6px black);
  }
`;

export const TextContact = styled.h3`
  color: #bababa;
  font-weight: 100;
`;
