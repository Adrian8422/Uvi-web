import styled from "styled-components";

export const ContainerTextAboutOur = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 70px 20px;
  background-color: white;
  box-shadow: 4px 4px 19px 0px grey;
`;
export const ContainerImgUvi = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  background-color: rgb(0 5 128 / 34%);

  @media (min-width: 660px) {
    justify-content: space-around;
  }
`;
export const ImgUvi = styled.img`
  display: none;
  width: 174px;
  @media (min-width: 660px) {
    display: flex;
  }
`;
export const TitleQuienesSomos = styled.h2`
  letter-spacing: 3px;
  font-size: 50px;
  font-family: "Inter";
  font-weight: normal;
`;

export const ContainerTextAndImages = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 34px;
  }
`;

export const ContainerImageAbout = styled.div`
  display: flex;
  width: 250px;
  height: 250px;
`;
export const ImageAbout = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
