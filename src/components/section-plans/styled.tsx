import styled from "styled-components";
export const SectionPlans = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 500px;
`;

export const TitlePlan = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 40px;
  margin: 0;
  background-image: linear-gradient(
    338deg,
    #9c27b0 29.35%,
    rgb(106 58 183) 78.73%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  height: 670px;
  width: 100%;
  justify-content: center;
`;
