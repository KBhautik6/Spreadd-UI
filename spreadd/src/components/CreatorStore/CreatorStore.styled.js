import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import ProximaNova from "../../font/proximanova_regular.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ProximaNova';
    src: url('${ProximaNova}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export const StyledSection = styled.section`
  font-family: "ProximaNova", sans-serif;
  overflow-x: hidden;
  margin: auto;
  top: 0;
  right: 0;
  background: #fff6f6;
  position: relative;
  padding: 100px 0;
  z-index: -1;

  @media screen and (max-width: 991px) {
    padding: 50px 0;
  }
`;

export const StyledContainer = styled.div`
  max-width: 980px;
  width: 100%;
  padding: 0 15px;
  margin: auto;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    opacity: 0.4;
    width: 100%;
    height: 80px;
  }

  @media screen and (max-width: 1280px) {
    max-width: 980px;
    width: 100%;
    padding: 0 15px;
  }
`;

export const StyledSvgContainer = styled.div`
  position: absolute;
  right: 0;
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
  color: #000000;
  margin: 0;
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
  width: 100%;

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
  font-weight: 400;
  line-height: 1.5;
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
  font-weight: 400;
  font-family: "ProximaNova", sans-serif;
  line-height: 1.2;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    line-height: 1;
    font-size: 24px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 14px;
  font-family: "ProximaNova", sans-serif;
  line-height: 1.5;
  max-width: 372px;
  width: 100%;

  @media screen and (max-width: 767px) {
    font-size: 9px;
    line-height: 1.3;
  }
`;
