import styled from "styled-components";

export const StyledSection = styled.div`
  background: white;
  padding: 120px 0;

  @media screen and (max-width: 991px) {
    padding: 50px 0;
  }
`;

export const StyledWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    padding: 0 15px;
  }
`;

export const StyledHeadingWrapper = styled.div`
  text-align: center;
`;

export const StyledHeading = styled.h3`
  margin-top: 0;
  margin-bottom: 8px;
  color: #212b36;
  font-weight: 700;
  font-family: "ProximaNova", sans-serif;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const StyledText = styled.p`
  margin-top: 0;
  margin-bottom: 16px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

export const StyledBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  gap: 20px;
  padding: 36px 0;
  margin-top: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    background: rgb(244, 247, 249);
    width: 80%;
    height: 360px;
  }

  @media screen and (max-width: 1200px) and (min-width: 992px) {
    gap: 15px;
  }

  @media screen and (max-width: 991px) {
    padding: 20px 0 0;
    gap: 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &::before {
      width: 100%;
      height: 80%;
      top: 50px;
    }
  }
  @media screen and (min-width:1201px){
    &::after{
        content: "";
        position: absolute;
        top: -120px;
        right: -125px;
        background: url(https://spreadd.io/assets/home/whyspreadd/bg-why-spreadd.svg) no-repeat;
        width: 221px;
        height: 360px;
    }
  }
`;

export const StyledBox = styled.div`
  background: #ffffff;
  box-shadow: rgba(49, 49, 49, 0.1) 0 81.2357px 64.9886px;
  border-radius: 5px;
  max-width: 33%;
  width: 100%;
  min-height: 230px;
  padding: 30px;
  z-index: 2;
  font-size: 24px;
  font-family: "ProximaNova", sans-serif;

  @media screen and (max-width: 991px) {
    /* font-size: 10px; */
    max-width: 80%;
    min-height: 190px;
  }
`;

export const StyledBoxIconWrapper = styled.div`
  margin-bottom: 20px;
`;

export const StyledBoxIcon = styled.img`
  vertical-align: middle;
`;

export const StyledBoxHeading = styled.h5`
  margin-top: 0;
  margin-bottom: 16px;
  color: #212b36;
  font-weight: 700;
  font-family: "ProximaNova", sans-serif;

  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`;

export const StyledBoxText = styled.p`
  margin: 0;
  font-size: 15px;
  font-family: "ProximaNova", sans-serif;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;
