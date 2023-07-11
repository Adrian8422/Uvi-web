import styled from "styled-components";
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  background: linear-gradient(
    343deg,
    rgb(68 40 112 / 88%) 29.35%,
    rgb(92 58 183 / 87%) 78.73%
  );
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerImg = styled.div`
  display: flex;
  /* width: 100px; */
  height: 37px;
`;

export const ImageHeader = styled.img`
  width: 100%;
  cursor: pointer;
`;
export const ContainerHyper = styled.div`
  display: none;
  padding-right: 8px;
  flex-direction: row;
  a {
    padding: 5px;
    cursor: pointer;
  }
  @media (min-width: 450px) {
    display: flex;
  }
`;

export const LinkA = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    background-size: 0 3px, 100% 3px;
    background: linear-gradient(
        to right,
        rgba(100, 200, 200, 1),
        rgba(100, 200, 200, 1)
      ),
      linear-gradient(
        to right,
        rgba(255, 0, 0, 1),
        rgba(255, 0, 180, 1),
        rgba(0, 100, 200, 1)
      );
    background-size: 100% 3px, 0 3px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
  }
`;
