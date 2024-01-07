import styled from "styled-components";

export const StyledSection = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  padding: 50px 0;
`;

export const StyledWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    background: linear-gradient(
      rgba(255, 246, 246, 0.5) 31.9%,
      rgba(255, 78, 83, 0.5) 171.98%
    );
    opacity: 0.4;
    width: 100%;
    height: 80px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 980px;
    width: 100%;
    padding: 0 15px;
  }
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

export const StyledPraticalWrapper = styled.div`
  position: absolute;
  top: 18px;
  right: 0;
`;

export const StyledLeftCampaign = styled.div`
  position: relative;
  max-width: 48%;
  width: 100%;

  @media screen and (max-width: 767px) {
    max-width: max-content;
    margin-top: 30px;
  }
`;

export const StyledPopUpBoxWrapper = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 0.46%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
  backdrop-filter: blur(12.2941px);
  border-radius: 5px;
  width: max-content;
  padding: 15px 10px 10px;
  position: absolute;
  top: 10px;
  bottom: unset;
  left: 70%;

  @media screen and (max-width: 991px) {
    left: 60%;
  }
`;

export const StyledPopUpIconWrapper = styled.div`
  position: absolute;
  right: 30px;
  top: -15px;
`;

export const StyledPopUpIcon = styled.img`
  vertical-align: middle;
`;

export const StyledPopUpHeading = styled.h5`
  font-weight: 600;
  font-size: 1.3rem;
  font-family: "ProximaNova", sans-serif;
  line-height: 1;
  color: #ffffff;
`;

export const StyledImageWrapper = styled.div`
  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;

export const StyledImage = styled.img`
  max-width: 450px;
  width: 100%;

  @media screen and (max-width: 1280px) {
    max-width: 398px;
    width: 90%;
  }
`;

export const StyledCardWrapper = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 0.46%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
  backdrop-filter: blur(12.2941px);
  border-radius: 5px;
  width: max-content;
  padding: 15px 10px 10px;
  position: absolute;
  bottom: -20px;
  left: -20px;

  @media screen and (max-width: 991px) {
    left: 0;
  }
`;

export const StyledCardIconWrapper = styled.div`
  position: absolute;
  right: 30px;
  top: -15px;
`;

export const StyledCardIcon = styled.img`
  vertical-align: middle;
`;

export const StyledCardHeading = styled.h5`
  font-weight: 600;
  font-size: 1.3rem;
  font-family: "ProximaNova", sans-serif;
  line-height: 1;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 0.5em;
`;

export const StyledCardText = styled.p`
  margin: 0;
  font-size: 1rem;
  font-family: "ProximaNova", sans-serif;
  color: white;
`;

export const StyledRightCampaign = styled.div`
  max-width: 48%;
  width: 100%;

  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;
export const StyledCampaignDetail = styled.div`
  font-family: "ProximaNova", sans-serif;
`;

export const StyledCampaign = styled.div`
  font-size: 1.5rem;
  font-family: "ProximaNova", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin-bottom: 25px;
  width: max-content;
`;

export const StyledCampaignHeading = styled.h3`
  font-size: 42px;
  font-weight: 800;
  font-family: "ProximaNova", sans-serif;
  line-height: 1;
  margin-bottom: 20px;
  margin-top: 0;
  color: #212b36;

  @media screen and (max-width: 767px) {
    font-size: 2.8rem;
    line-height: 1;
  }
`;

export const StyledCampaignText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  font-family: "ProximaNova", sans-serif;
  line-height: 2;

  @media screen and (max-width: 767px) {
    font-size: 1rem;
    line-height: 1.1;
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 0.8rem;
    line-height: 1.2;
  }
`;
