import React from "react";

import {
  StyledInnerWrapper,
  StyledImageWrapper,
  StyledLeftWrapper,
  StyledCardText,
  StyledImageCard,
  StyledCard,
  StyledImage,
  StyledSection,
  StyledRightDetail,
  StyledRightWrapper,
  StyledWrapper,
  StyledLeftDetail,
  StyledAcademy,
  StyledHeading,
  StyledParagraph,
} from "./SpreaddAcademy.styled";

export const SpreaddAcademy = () => {
  return (
    <div>
      <StyledSection>
        <StyledWrapper>
          <StyledInnerWrapper>
            <StyledRightWrapper>
              <StyledRightDetail>
                <StyledImageWrapper>
                  <StyledImage
                    src="https://spreadd.io/assets/home/academy.jpg"
                    alt="academy"
                  />
                </StyledImageWrapper>
                <StyledCard>
                  <StyledImageCard
                    src="https://spreadd.io/assets/home/academy.jpg"
                    alt="card"
                  />
                  <StyledCardText>
                    Amazing course, i would definetely recommend
                  </StyledCardText>
                </StyledCard>
              </StyledRightDetail>
            </StyledRightWrapper>

            <StyledLeftWrapper>
              <StyledLeftDetail>
                <StyledAcademy>Spreadd Academy</StyledAcademy>

                <StyledHeading>
                  <div>
                    Create courses and curriculums for your
                    collaborators/followers
                  </div>
                </StyledHeading>

                <StyledParagraph>
                  <div>
                    We have got a host of features that can enable you to
                    skyrocket your workshop and course sales. Empower your
                    collaborators by delivering deeply engaging experience
                    wherever they are, anytime, anywhere.
                  </div>
                </StyledParagraph>
              </StyledLeftDetail>
            </StyledLeftWrapper>
          </StyledInnerWrapper>
        </StyledWrapper>
      </StyledSection>
    </div>
  );
};
