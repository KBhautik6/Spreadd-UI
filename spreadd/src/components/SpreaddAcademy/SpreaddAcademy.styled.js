import styled from "styled-components";

export const StyledSection = styled.section`
  /* position: sticky; */
  top: 0px;
  right: 0px;
  background: rgb(255, 246, 246);
  position: relative;
  padding: 100px 0px;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    top: 18px;
    left: 0px;
    background: url(https://spreadd.io/assets/home/left-dot-patch.svg) no-repeat;
    width: 46px;
    height: 37px;
  }
`;

export const StyledWrapper = styled.div`
  max-width: 1100px;
  margin: 0px auto;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  margin: 0 100px;
`;

export const StyledRightWrapper = styled.div`
  max-width: 49%;
  width: 100%;
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
    top: -18px;
    left: 20px;
    background: url(https://spreadd.io/assets/home/round-patch.svg) no-repeat;
    width: 96px;
    height: 96px;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -18px;
    left: 143px;
    background: url(https://spreadd.io/assets/home/dot-patch.svg) no-repeat;
    width: 90px;
    height: 57px;
  }
`;

export const StyledImage = styled.img`
  max-width: 280px;
  z-index: 2;
  border-radius: 20px;
`;

export const StyledCard = styled.div`
  position: absolute;
  top: -20px;
  right: 60px;
  background: rgb(254, 79, 82);
  border-radius: 3px;
  padding: 10px;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  max-width: 260px;
  width: 100%;
`;

export const StyledImageCard = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
  border-style: none;
`;

export const StyledCardSpan = styled.span`
  font-weight: 600;
  font-size: 13px;
  line-height: 1.5;
  color: #fff;
  text-align: left;
`;

export const StyledLeftWrapper = styled.div`
  max-width: 49%;
  width: 100%;
`;

export const StyledLeftDetail = styled.div`
  font-family: ProximaNova, "sans-serif";
`;
export const StyledAcademy = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: black;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin-bottom: 25px;
  width: max-content;
`;

export const StyledHeading = styled.h3`
  font-size: 42px;
  line-height: 1;
  margin-bottom: 20px;
  font-weight: 400;
`;

export const StyledHeadingCommon = styled.div`
  font-family: ProximaNova, "sans-serif";
  opacity: 1;
  transform: none;
`;

export const StyledHeadingSpan = styled.span`
  /* height: 110px; */
`;

export const StyledParagraph = styled.p`
  font-size: 14px;
  line-height: 23px;
  max-width: 372px;
  font-weight: 500;
`;

export const StyledParaCommon = styled.div`
  opacity: 1;
  transform: none;
  font-family: ProximaNova, "sans-serif";
`;

export const StyledParaSpan = styled.span`
  height: 110px;
`;
