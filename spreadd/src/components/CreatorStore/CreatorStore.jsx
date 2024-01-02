import React from "react";

import {
  StyledSection,
  StyledContainer,
  StyledSvgContainer,
  StyledWrapper,
  StyledLeft,
  StyledCardContainer,
  StyledCardHeading,
  StyledCardText,
  StyledImageContainer,
  StyledImage,
  StyledRight,
  StyledCreatorStore,
  StyledRightInner,
  StyledHeading,
  StyledHeadingCommon,
  StyledHeadingSpan,
  StyledParagraph,
  StyledParaCommon,
  StyledParaSpan,
  StyledCreatorCard,
} from "../CreatorStore/CreatorStore.styled";

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
            <StyledLeft>
              <StyledCardContainer>
                <StyledCardHeading>100+</StyledCardHeading>
                <StyledCardText>Happy Customers 😍</StyledCardText>
              </StyledCardContainer>

              <StyledImageContainer>
                <StyledImage
                  src="https://spreadd.io/assets/home/iphone.png"
                  alt="phoneimage"
                />
              </StyledImageContainer>
            </StyledLeft>

            <StyledRight>
              <StyledRightInner>
                <StyledCreatorStore>Creator Store</StyledCreatorStore>

                <StyledHeading>
                  <StyledHeadingCommon>
                    <StyledHeadingSpan>Curate your</StyledHeadingSpan>
                  </StyledHeadingCommon>

                  <StyledHeadingCommon>
                    <StyledHeadingSpan>products and turn</StyledHeadingSpan>
                  </StyledHeadingCommon>

                  <StyledHeadingCommon>
                    <StyledHeadingSpan>your content shop-</StyledHeadingSpan>
                  </StyledHeadingCommon>

                  <StyledHeadingCommon>
                    <StyledHeadingSpan>able</StyledHeadingSpan>
                  </StyledHeadingCommon>
                </StyledHeading>

                <StyledParagraph>
                  <StyledParaCommon>
                    <StyledParaSpan>
                      Apply to create your own store. You can choose brands
                    </StyledParaSpan>
                  </StyledParaCommon>

                  <StyledParaCommon>
                    <StyledParaSpan>
                      and display their product within your own store. You can
                    </StyledParaSpan>
                  </StyledParaCommon>

                  <StyledParaCommon>
                    <StyledParaSpan>
                      get paid on every sale brand makes through you.
                    </StyledParaSpan>
                  </StyledParaCommon>
                </StyledParagraph>
              </StyledRightInner>
            </StyledRight>
          </StyledWrapper>
          <StyledCreatorCard>100+ curated products</StyledCreatorCard>
        </StyledContainer>
      </StyledSection>
    </div>
  );
};
