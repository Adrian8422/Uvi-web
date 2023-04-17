import styled from "styled-components";

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 450px) {
    display: none;
  }
  @media (max-width: 768px) {
    /* display: block; */
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 30px;
    z-index: 20;
  }
`;
export const BurgerLines = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 5px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out 0s;
  transform-origin: -3px center;

  &:nth-child(1) {
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
  }

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(20px)" : "translateX(0)"};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 8px;
  right: 0px;
  height: 51vh;
  width: 300px;
  background: linear-gradient(
    343deg,
    rgba(68, 40, 112, 0.93) 29.35%,
    rgb(92, 58, 183) 78.73%
  );
  z-index: 10;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  @media (min-width: 450px) {
    display: none;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LinkTo = styled.a`
  text-decoration: none;
  color: white;
  border-right: 1px solid #80808047;
  border-bottom: 1px solid #80808059;
  padding: 11px;
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px;
  justify-content: space-around;
`;
