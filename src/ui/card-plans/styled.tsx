import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 412px;
  cursor: pointer;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  width: 504px;
  justify-content: space-around;
  background-color: white;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 7px 16px 0px,
    rgba(0, 0, 0, 0.07) 0px 1px 3px 0px;

  &:hover {
    transition: 0.5s ease-out;
    box-shadow: 0 8px 19px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
  }
`;

export const TitlePlan = styled.h2`
  font-size: 28px;
  background-image: linear-gradient(
    338deg,
    #9c27b0 29.35%,
    rgb(106 58 183) 78.73%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Price = styled.h3`
  font-size: 28px;
  color: #2a2828;
`;

export const ULlist = styled.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  /* align-items: center; */
  /* text-align: center; */
  height: 150px;
`;
export const ListBullets = styled.li`
  text-align: left;
  list-style-type: disc;
  list-style-image: url("./src/medias/bullet-modified.png");
  ::marker {
    /* background: linear-gradient(45deg, #f69ec4, #32557f); */
  }
`;
// ul li {
//     list-style-type: none;
//     margin-bottom: 15px;
//     background: linear-gradient(45deg, #f69ec4, #32557f);
//     height: 24px;
//     width: 24px;
//     border-radius: 50%;

//     span {
//       margin-left: 30px;
//     }
//   }
