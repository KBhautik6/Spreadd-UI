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
                  alt="iphone"
                />
              </StyledImageContainer>
            </StyledLeftWrapper>
            <StyledRightWrapper>
              <StyledRightInner>
                <StyledCreatorStore>Creator Store</StyledCreatorStore>
                <StyledHeading>
                  Curate your products and turn your content shop - able.
                </StyledHeading>
                <StyledParagraph>
                  Apply to create your own store. You can choose brands and
                  display their product within your own store. You can get paid
                  on every sale brand makes through you.
                </StyledParagraph>
              </StyledRightInner>
            </StyledRightWrapper>
          </StyledWrapper>
        </StyledContainer>
      </StyledSection>
    </div>
  );
};
