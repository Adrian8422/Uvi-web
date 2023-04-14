import styled from "styled-components";

export const ContainerSectionServices = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    rgb(224 92 117 / 86%) 0px,
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

export const ContainerService = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`;
