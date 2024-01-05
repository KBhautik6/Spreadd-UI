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
  top: 0px;
  right: 0px;
  background: #fff6f6;
  position: relative;
  padding: 100px 0px;
  z-index: -1;
  font-family: san-serif;

  &::before {
    content: "";
    position: absolute;
    top: 48px;
    left: 0px;
    background: url(https://spreadd.io/assets/home/left-dot-patch.svg) no-repeat;
    width: 46px;
    height: 37px;
  }

  @media screen and (max-width: 991px) {
    padding: 50px 0px;
  }
`;

export const StyledWrapper = styled.div`
  max-width: 1100px;
  margin: 0px auto;

  @media screen and (max-width: 1280px) {
    max-width: 980px;
    padding: 0px 15px;
    width: 100%;
  }
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  margin: 0 0;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    margin: 100px auto;
  }
`;

export const StyledRightWrapper = styled.div`
  max-width: 49%;
  width: 100%;

  @media screen and (max-width: 767px) {
    min-width: min-content;
    margin-top: 50px;
  }
`;

export const StyledRightDetail = styled.div`
  text-align: center;
  position: relative;
`;

export const StyledImageWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -31px;
    left: 54px;
    background: url(https://spreadd.io/assets/home/round-patch.svg) no-repeat;
    width: 96px;
    height: 96px;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 58px;
    background: url(https://spreadd.io/assets/home/dot-patch.svg) no-repeat;
    width: 90px;
    height: 57px;
  }

  @media screen and (max-width: 991px) {
    max-width: max-content;

    &::before {
      top: -30px;
      left: -30px;
    }

    &::after {
      bottom: -30px;
      left: -40px;
    }
  }
`;

export const StyledImage = styled.img`
  max-width: 280px;
  z-index: 2;
  border-radius: 20px;
  width: 100%;

  @media screen and (max-width: 1280px) {
    max-width: 280px;
    width: 100%;
  }
`;

export const StyledCard = styled.div`
  position: absolute;
  top: -20px;
  right: 3px;
  background: #fe4f52;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  max-width: 260px;
  width: 100%;

  @media screen and (max-width: 767px) {
    right: -48px;
    height: 20px;
    width: 100%;
    max-width: 140px;
  }
`;

export const StyledImageCard = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
  border-style: none;

  @media screen and (max-width: 767px) {
    max-width: 16px;
    height: 16px;
  }
`;

export const StyledCardText = styled.span`
  font-weight: 600;
  font-size: 13px;
  line-height: 1.5;
  color: #ffffff;
  text-align: left;

  @media screen and (max-width: 767px) {
    font-size: 9.6px;
  }
`;

export const StyledLeftWrapper = styled.div`
  max-width: 49%;
  width: 100%;
  font-family: sans-serif;

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 0px;
  }
`;

export const StyledLeftDetail = styled.div`
  font-family: "sans-serif";
`;

export const StyledAcademy = styled.div`
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: black;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin-bottom: 25px;
  width: max-content;

  @media screen and (max-width: 767px) {
    font-size: 14.4px;
    line-height: 15px;
  }

  @media screen and (max-width: 991px) {
    font-size: 12.8px;
    line-height: 13px;
  }
`;

export const StyledHeading = styled.h3`
  font-size: 42px;
  line-height: 1;
  margin-bottom: 20px;
  font-weight: 400;
  font-family: sans-serif;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 28px;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 32px;
    line-height: 37px;
  }

  @media screen and (min-width: 992px) and (max-width: 1280px) {
    font-size: 42px;
    line-height: 47px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 14px;
  font-family: sans-serif;
  line-height: 23px;
  max-width: 372px;
  font-weight: 500;
  font-family: sans-serif;

  @media screen and (max-width: 767px) {
    font-size: 9.3px;
    line-height: 13px;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
    line-height: 14px;
  }

  @media screen and (min-width: 992px) and (max-width: 1280px) {
    font-size: 14px;
    line-height: 23px;
    max-width: 372px;
  }
`;
