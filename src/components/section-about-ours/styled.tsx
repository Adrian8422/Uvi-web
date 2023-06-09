import styled from "styled-components";
export const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  background: url("./src/medias/rrhh4.jpg");
  height: 500px;
  background-size: cover;

  @media (min-width: 1140px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
  }
`;

export const ContainerAboutOurs = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 40px;
`;
export const ContainerImage = styled.div`
  display: none;
  @media (min-width: 1140px) {
    display: flex;
  }
`;
export const Img = styled.img`
  max-width: 500px;
`;

export const FullTextAboutOurs = styled.p`
  max-width: 100%;
`;

export const Button = styled.button`
  background-color: initial;
  background-image: linear-gradient(
    343deg,
    rgb(210 210 210 / 78%) 29.35%,
    rgb(119 200 200 / 78%) 75.73%
  );
  border-radius: 5px;
  border-style: none;
  box-shadow: rgba(245, 244, 247, 0.25) 0 1px 1px inset;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 60px;
  line-height: 60px;
  margin-left: -4px;
  outline: 0;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: bottom;
  width: 190px;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 1000px) {
    .button-69 {
      font-size: 14px;
      height: 55px;
      line-height: 55px;
      width: 150px;
    }
  }
`;

export const AHyper = styled.a`
  text-decoration: underline;
  color: #8614f8;
  cursor: pointer;
`;

export const ShortTextAboutOurs = styled.p`
  max-width: 100%;
  color: #f1e9e9c8;
`;

export const Title = styled.h1`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: 50px;
  background: linear-gradient(
    343deg,
    rgb(119 200 200 / 78%) 22.73%,
    rgb(210 210 210 / 78%) 29.35%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
