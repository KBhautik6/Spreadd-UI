import React from "react";

import {
  StyledSection,
  StyledWrapper,
  StyledInnerWrapper,
  StyledLeftPartner,
  StyledPartnerImage,
  StyledRightPartner,
  StyledPartnerHeading,
  StyledPartnerText,
  StyledPartnerTrustedWrapper,
  StyledTrustWrapper,
  StyledTrustLine,
  StyledTrustHeading,
  StyledPartnerImageWrapper,
  StyledTrustImage,
} from "./Partner.styled";

export const Partner = () => {
  return (
    <div>
      <StyledSection>
        <StyledWrapper>
          <StyledInnerWrapper>
            <StyledLeftPartner>
              <StyledPartnerImage
                src="https://spreadd.io/9ddc94ee6277c0a5b9f2f46f46464e53.jpg"
                alt="Partner with multiple creator and brands"
              />
            </StyledLeftPartner>

            <StyledRightPartner>
              <StyledPartnerHeading>
                We’re as smooth as our collaborations.
              </StyledPartnerHeading>
              <StyledPartnerText>
                We work with creators and brands from Dubai and India. We
                support more than 5+ brands and 200+ creators. We proudly
                facilitate faster growth for global companies in web3 and web3.
              </StyledPartnerText>
            </StyledRightPartner>
          </StyledInnerWrapper>
          <div>
            <StyledPartnerTrustedWrapper>
              <StyledTrustWrapper>
                <StyledTrustLine></StyledTrustLine>
                <StyledTrustHeading>Trusted & supported by:</StyledTrustHeading>
              </StyledTrustWrapper>
              <StyledPartnerImageWrapper>
                <StyledTrustImage
                  src="https://spreadd.io/875dec57a27d2f383819edbcc9944e97.jpg"
                  alt="polygon-ecosystem"
                />
                <StyledTrustImage
                  src="https://spreadd.io/f4f4b093b0ebf25d7a22b46e54dd91f6.jpg"
                  alt="chainpals"
                />
                <StyledTrustImage
                  src="https://spreadd.io/45aece980a0b097c53b252e3074d8c77.jpg"
                  alt="dappfactory"
                />
                <StyledTrustImage
                  src="https://spreadd.io/40e1c51ec8d39bdd6f1f6e6caac5bb04.jpg"
                  alt="cryption-network"
                />
                <StyledTrustImage
                  src="https://spreadd.io/d9d4c5a7d7181156f56f23121c2991bd.jpg"
                  alt="toksi-toi"
                />
                <StyledTrustImage
                  src="https://spreadd.io/ca5422c45d79fc2000681b81915e3e14.jpg"
                  alt="Sparsh"
                />
                <StyledTrustImage
                  src="https://spreadd.io/373638128aa96ad233997256bfa2e4ee.jpg"
                  alt="Sport-Yo"
                />
              </StyledPartnerImageWrapper>
            </StyledPartnerTrustedWrapper>
          </div>
        </StyledWrapper>
      </StyledSection>
    </div>
  );
};
