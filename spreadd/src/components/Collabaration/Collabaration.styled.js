import styled from "styled-components";

export const StyledSection = styled.div`
  font-family: "ProximaNova", sans-serif;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  background-color: #f4f7f9;

  @media screen and (max-width: 576px) {
    background-color: #ffffff;
  }
`;

export const StyledCollaboration = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
`;

export const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  gap: 136px;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledLeftCollaboration = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 60px;
`;

export const StyledCollaborationHeading = styled.h3`
  max-width: 400px;
  width: 100%;
  margin: 131px 0 0;
  font-size: 40px;
  font-weight: 400;
  font-family: "ProximaNova", sans-serif;
  line-height: 43px;

  @media screen and (max-width: 767px) {
    margin: 87px 0 0;
    font-size: 29px;
    font-weight: 400;
    line-height: 40px;
  }
`;

export const StyledCollaborationText = styled.p`
  width: 100%;
  margin: 40px 0 0;
  max-width: 400px;
  line-height: 20px;
  font-size: 15px;
`;

export const StyledRightCollaboration = styled.div`
  display: flex;
  gap: 60px;
  position: relative;
  margin: 0 -20px 0 110px;

  @media screen and (min-width: 576px) and (max-width: 767px) {
    margin: 0 -20px 0 31px;
  }

  @media screen and (max-width: 575px) {
    justify-content: flex-end;
  }
`;

export const CollabrationImagesContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const StyledCollaborationHandImage = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
`;

export const StyledHandImage = styled.img`
  position: relative;
  max-width: 190px;
  width: 100%;
  top: 90px;
`;

export const StyledCollaborationTalkImage = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
`;

export const StyledTalkImage = styled.img`
  position: relative;
  max-width: 190px;
  width: 100%;
  top: 140px;

  @media screen and (max-width: 767px) {
    margin-left: -25px;
  }
`;

export const StyledCreatorTagWrapper = styled.div`
  border-radius: 3px;
  border: 10px solid #ffffff;
  background: #ffffff;
  position: absolute;
  top: 402px;
  right: 150px;
  width: 128px;
  max-height: 28px;
  height: auto;

  @media screen and (min-width:576px) and (max-width: 767px) {
    position: absolute;
    top: 230px;
    right: 82px;
  }

  @media screen and (max-width: 575px) {
    position: absolute;
    top: 298px;
    right: 110px;
  }
`;

export const StyledCreatorTag = styled.h4`
  font-size: 18px;
  font-weight: 400;
  font-family: "ProximaNova", sans-serif;
  color: #f06156;
  position: relative;
  right: -6px;
  top: -20px;
`;
