import styled from "styled-components";
import { GlobalStyles } from "../CreatorStore/CreatorStore.styled";

export const StyledSection = styled.section`
  top: 0;
  right: 0;
  background: #fff6f6;
  position: relative;
  padding: 100px 0;
  z-index: -1;
  font-family: san-serif;

  &::before {
    content: "";
    position: absolute;
    top: 48px;
    left: 0;
    background: url(https://spreadd.io/assets/home/left-dot-patch.svg) no-repeat;
    width: 46px;
    height: 37px;
  }

  @media screen and (max-width: 991px) {
    padding: 50px 0;
  }
`;

export const StyledWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1280px) {
    max-width: 980px;
    width:100%;
    padding: 0 15px;
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
  justify-content: flex-start;
  align-items: center;
  max-width: 260px;
  width: 100%;

  @media screen and (max-width: 767px) {
    right: -48px;
    height: 20px;
    width: 100%;
    max-width: 140px;
    width:100%;
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
    width:100%;
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
    font-size: 9px;
  }
`;

export const StyledLeftWrapper = styled.div`
  max-width: 49%;
  width: 100%;
  font-family: "ProximaNova", sans-serif;

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 0;
  }
`;

export const StyledLeftDetail = styled.div`
  font-family: "ProximaNova", "sans-serif";
`;

export const StyledAcademy = styled.div`
  font-family: "ProximaNova", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #000000;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin-bottom: 25px;
  width: max-content;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 1.2;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 13px;
    line-height: 1;
  }
`;

export const StyledHeading = styled.h3`
  font-size: 42px;
  font-weight: 400;
  font-family: "ProximaNova", sans-serif;
  line-height: 1;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 1.2;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 32px;
    line-height: 1.2;
  }

  @media screen and (min-width: 992px) and (max-width: 1280px) {
    font-size: 42px;
    line-height: 1.3;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 14px;
  font-family: "ProximaNova", sans-serif;
  font-weight: 500;
  line-height: 1.2;
  max-width: 372px;
  width: 100%;

  @media screen and (max-width: 767px) {
    font-size: 9px;
    line-height: 1.2;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
    line-height: 1.2;
  }

  @media screen and (min-width: 992px) and (max-width: 1280px) {
    font-size: 14px;
    line-height: 1.5;
    max-width: 372px;
    width: 100%;
  }
`;
