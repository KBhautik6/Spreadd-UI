import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: #ffffff;
  margin: 0px;
  max-width: unset;
`;

export const StyledWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  min-height: 70vh;
  justify-content: space-around;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
  gap: 8.5rem;
  position: relative;

  @media screen and (max-width: 575px) {
    flex-direction: column;
    min-height: unset;
    margin-bottom: 4.1rem;
  }

  @media screen and (min-width: 576px) and (max-width: 991px) {
    gap: 4.5rem;
  }
`;

export const StyledParticalWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: -25px;
`;

export const StyledLeftPartner = styled.div`
  max-width: 42.8rem;
  width: 100%;

  @media screen and (max-width: 767px) {
    max-width: 29.7rem;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    max-width: 25.7rem;
  }
`;

export const StyledPartnerImage = styled.img`
  width: 100%;
  object-fit: cover;
  vertical-align: middle;
`;

export const StyledRightPartner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media screen and (max-width: 480px) {
    order: -1;
    align-self: flex-start;
    padding-left: 2.2rem;
  }
`;

export const StyledPartnerHeading = styled.div`
  font-size: 42px;
  line-height: 1.2;
  max-width: 26.9rem;
  width: 100%;

  @media screen and(max-width: 910px) {
    font-size: 2.52rem;
    line-height: 1.1;
    max-width: 16.2rem;
    width: 100%;
  }
`;

export const StyledPartnerText = styled.div`
  font-size: 15px;
  line-height: 23px;
  max-width: 37rem;
  width: 100%;

  @media screen and (max-width: 991px) {
    font-size: 10px;
    line-height: 16px;
  }
`;

export const StyledPartnerTrustedWrapper = styled.div`
  padding: 0 7.8rem;
  display: flex;
  gap: 10.7rem;
  justify-content: space-between;
  margin-bottom: 2.2rem;
  margin-top: -1.9rem;
  align-items: center;

  @media screen and (max-width: 575px) {
    padding-left: 2.2rem;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 0px;
    align-items: flex-start;
  }

  @media screen and(min-width:576px) and (max-width: 991px) {
    flex-direction: column;
    padding: 0;
    gap: 2.5rem;
  }
`;

export const StyledTrustWrapper = styled.div`
  width: 100%;
`;

export const StyledTrustLine = styled.div`
  width: 4.7rem;
  border: 2px solid rgb(255, 78, 84);
  margin-bottom: 0.9rem;
  border-radius: 100vmax;
`;

export const StyledTrustHeading = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 20px;
    max-width: 24rem;
  }

  @media screen and (min-width: 768px) and (max-width: 910px) {
    font-size: 1.2rem;
    line-height: 18px;
  }
`;

export const StyledPartnerImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* gap:2.3rem;   */
  max-width: 50%;
  gap:20px;

  @media screen and (max-width: 991px) {
    align-items: flex-start;
    gap: 2.5rem;
    flex-wrap: wrap;
    max-width: 100%;
  }
`;

export const StyledTrustImage = styled.img`
  max-width: 100px;
  object-fit: contain;

  @media screen and (max-width: 991px) {
    max-width: 10rem;
  }
`;
