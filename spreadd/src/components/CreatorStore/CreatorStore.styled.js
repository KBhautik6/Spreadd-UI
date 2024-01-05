import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import ProximaNova from "../../font/proximanova_regular.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ProximaNova';
    src: url('${ProximaNova}') format('truetype'); /* specify the format of the font file */
    font-weight: normal;
    font-style: normal;
  }
`;

export const StyledSection = styled.section`
  font-family: "ProximaNova", sans-serif;
  overflow-x: hidden;
  margin: auto;
  top: 0px;
  right: 0px;
  background: #fff6f6;
  position: relative;
  padding: 100px 0px;
  z-index: -1;

  @media screen and (max-width: 991px) {
    padding: 50px 0px;
  }
`;

export const StyledContainer = styled.div`
  max-width: 980px;
  width: 100%;
  padding: 0px 15px;
  margin: auto;

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    opacity: 0.4;
    width: 100%;
    height: 80px;
  }

  @media screen and (max-width: 1280px) {
    max-width: 980px;
    width: 100%;
    padding: 0px 15px;
  }
`;

export const StyledSvgContainer = styled.div`
  position: absolute;
  right: 0px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const StyledLeftWrapper = styled.div`
  max-width: 50%;
  width: 100%;
  position: relative;

  @media screen and (max-width: 767px) {
    max-width: 100%;
    margin-top: 30px;
  }
`;

export const StyledCardContainer = styled.div`
  position: absolute;
  right: 40px;
  top: -20px;
  padding: 10px;
  background: #ffffff;
  box-shadow: rgba(240, 97, 86, 0.1) 5px 12px 21px;

  @media screen and (max-width: 424px) {
    width: 100px;
    height: 30px;
    font-size: 12px;
    left: 150px;
    line-height: 0.4;
  }
`;

export const StyledCardHeading = styled.h5`
  font-size: 12px;
  line-height: 1;
  color: #ff4e53;

  @media screen and (max-width: 767px) {
    font-size: 7px;
  }
`;
export const StyledCardText = styled.p`
  color: black;
  margin: 0px;
  font-size: 15px;

  @media screen and (max-width: 767px) {
    font-size: 9px;
  }
`;

export const StyledImageContainer = styled.div`
  max-width: 380px;
  width: 100%;
`;

export const StyledPhoneImage = styled.img`
  max-width: 398px;
  width: 90%;

  @media screen and (max-width: 1280px) {
    max-width: 380px;
    width: 100%;
  }
`;

export const StyledRightWrapper = styled.div`
  max-width: 48%;
  width: 100%;

  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StyledRightInner = styled.div`
  font-family: "ProximaNova", sans-serif;
`;

export const StyledCreatorStore = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: #000000;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin-bottom: 25px;
  display: inline-block;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 1;
  }
`;

export const StyledHeading = styled.h3`
  font-size: 42px;
  line-height: 1.2;
  margin-bottom: 20px;
  font-weight: 400;
  font-family: "ProximaNova", sans-serif;

  @media screen and (max-width: 767px) {
    line-height: 1;
    font-size: 24px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 14px;
  line-height: 1.5;
  max-width: 372px;
  width: 100%;
  font-family: "ProximaNova", sans-serif;

  @media screen and (max-width: 767px) {
    font-size: 9.3px;
    line-height: 1.3;
  }
`;

// Pink line code

// export const StyledCreatorCard = styled.div`
/* width: 100%; */
/* max-width: 45%; */
/* position: absolute; */
/* left: 0px; */
/* bottom: 116px; */
/* background: linear-gradient( */
/* 270deg, */
/* rgb(240, 97, 86) 0%, */
/* rgba(240, 97, 86, 0.4) 98.89% */
/* ); */
/* font-weight: 600; */
/* font-size: 28px; */
/* line-height: 20px; */
/* color: white; */
/* text-align: right; */
/* padding: 40px 30px; */

//   width: 100%;
//   max-width:35%;
//   position: absolute;
//   left: 0px;
//   background: linear-gradient(270deg, rgb(240, 97, 86), rgba(240, 97, 86, 0.4));
//   font-weight: 600;
//   font-size: 12px;
//   line-height: 20px;
//   bottom:100px;
//   z-index:1;
//   color: white;
//   text-align: right;
//   padding: 18px 30px;

//   @media screen and (max-width: 480px) {
//     max-width: 80%;
//   }
//   @media screen and (max-width: 767px) {
//     padding: 20px;
//     font-size: 1.2rem;
//     max-width: 50%;
//     bottom: 50px;
//   }
// `;
