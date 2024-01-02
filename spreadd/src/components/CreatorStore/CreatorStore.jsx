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
  StyledParagraph,
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
            {/* Left section is going to start */}
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

            {/* Right section is going to start */}
            <StyledRight>
              <StyledRightInner>
                <StyledCreatorStore>Creator Store</StyledCreatorStore>

                <StyledHeading>
                  <div>
                    <span>Curate your</span>
                  </div>

                  <div>
                    <span>products and turn</span>
                  </div>

                  <div>
                    <span>your content shop-</span>
                  </div>

                  <div>
                    <span>able</span>
                  </div>
                </StyledHeading>

                <StyledParagraph>
                  <div>
                    <span>
                      Apply to create your own store. You can choose brands
                    </span>
                  </div>

                  <div>
                    <span>
                      and display their product within your own store. You can
                    </span>
                  </div>

                  <div>
                    <span>
                      get paid on every sale brand makes through you.
                    </span>
                  </div>
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
