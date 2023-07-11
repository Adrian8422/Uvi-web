import styled from "styled-components";

export const ContainerSectionServices = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    rgb(207 198 230 / 86%) 0px,
    rgb(240, 180, 192) 100%
  );
`;

export const ContainerWithoutCarousel = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin: 0 auto;
  flex-direction: column;
  @media (min-width: 700px) {
    display: none;
  }
`;
export const ContainerWithCarousel = styled.div`
  display: none;
  flex-direction: column;
  @media (min-width: 700px) {
    display: flex;
  }
`;
export const TitleOursService = styled.h1`
  padding: 29px;
  color: #1c181af5;
  font-weight: 100;
  font-size: 40px;
`;

export const ContainerService = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`;
