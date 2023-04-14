import styled from "styled-components";

export const ContainerServiceCard = styled.div`
  display: flex;

  width: 100%;
  flex-direction: column;

  margin: 25px;
  background-color: #ffffff47;
  border-radius: 4px;
  transition: transform 0.2s ease-in-out 0s;
  -webkit-box-align: end;
  align-items: self-end;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 7px 16px 0px,
    rgba(0, 0, 0, 0.07) 0px 1px 3px 0px;

  &:hover {
    transform: translate(0, -10px);
    transition: 0.5s ease-out;
    box-shadow: 0 8px 19px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
  }
`;
export const ContainerTextCard = styled.div`
  padding: 27px;
  display: flex;
  flex-direction: column;
  text-align: end;
`;
export const ContainerImageCard = styled.div`
  display: flex;
  width: 100%;
`;
export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ButtonCard = styled.button`
  background-color: initial;
  background-image: linear-gradient(#f6ccd4 0, #f0b4c0 100%);
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
