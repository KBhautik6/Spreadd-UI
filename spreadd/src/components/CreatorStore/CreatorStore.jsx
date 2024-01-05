import React from "react";

import {
  StyledSection,
  StyledContainer,
  StyledSvgContainer,
  StyledWrapper,
  StyledLeftWrapper,
  StyledCardContainer,
  StyledCardHeading,
  StyledCardText,
  StyledImageContainer,
  StyledPhoneImage,
  StyledRightWrapper,
  StyledCreatorStore,
  StyledRightInner,
  StyledHeading,
  StyledParagraph,
  // StyledCreatorCard, {Pink line styling component}
} from "./CreatorStore.styled";

import image from "../../assets/rightdot.svg";

export const CreatorStore = () => {
  return (
    <div>
      <StyledSection>
        <StyledContainer>
          <StyledSvgContainer>
            <img src={image} alt="rightdot" />
          </StyledSvgContainer>

          <StyledWrapper>
            <StyledLeftWrapper>
              <StyledCardContainer>
                <StyledCardHeading>100+</StyledCardHeading>
                <StyledCardText>Happy Customers 😍</StyledCardText>
              </StyledCardContainer>

              <StyledImageContainer>
                <StyledPhoneImage
                  src="https://spreadd.io/assets/home/iphone.png"
                  alt="iphoneimage"
                />
              </StyledImageContainer>
            </StyledLeftWrapper>
            <StyledRightWrapper>
              <StyledRightInner>
                <StyledCreatorStore>Creator Store</StyledCreatorStore>

                <StyledHeading>
                  <div>
                    Curate your products and turn your content shop - able.
                  </div>
                </StyledHeading>

                <StyledParagraph>
                  <div>
                    Apply to create your own store. You can choose brands and
                    display their product within your own store. You can get
                    paid on every sale brand makes through you.
                  </div>
                </StyledParagraph>
              </StyledRightInner>
            </StyledRightWrapper>

            {/* Pink line comment 100+ curated products */}
            {/* <StyledCreatorCard>100+ curated products</StyledCreatorCard> */}
          </StyledWrapper>
        </StyledContainer>
      </StyledSection>
    </div>
  );
};
