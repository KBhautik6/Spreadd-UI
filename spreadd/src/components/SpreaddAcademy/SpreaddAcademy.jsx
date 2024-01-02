import React from "react";

import {
  StyledInnerWrapper,
  StyledImageWrapper,
  StyledLeftWrapper,
  StyledCardSpan,
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
  StyledHeadingCommon,
  StyledHeadingSpan,
  StyledParagraph,
  StyledParaCommon,
  StyledParaSpan,
} from "../SpreaddAcademy/SpreaddAcademy.styled";

export const SpreaddAcademy = () => {
  return (
    <div>
      <StyledSection>
        <StyledWrapper>
          <StyledInnerWrapper>
            {/* Right section is going to start */}
            <StyledRightWrapper>
              <StyledRightDetail>
                <StyledImageWrapper>
                  <StyledImage
                    src="https://spreadd.io/assets/home/academy.jpg"
                    alt="girlimage"
                  />
                </StyledImageWrapper>
                <StyledCard>
                  <StyledImageCard
                    src="https://spreadd.io/assets/home/academy.jpg"
                    alt="card"
                  />
                  <StyledCardSpan>
                    Amazing course, i would definetely recommend
                  </StyledCardSpan>
                </StyledCard>
              </StyledRightDetail>
            </StyledRightWrapper>
            {/* left section is going to start */}

            <StyledLeftWrapper>
              {/* New styling component started */}
              <StyledLeftDetail>
                <StyledAcademy>Spreadd Academy</StyledAcademy>
                <StyledHeading>
                  <StyledHeadingCommon>
                    <StyledHeadingSpan>Create courses and</StyledHeadingSpan>
                  </StyledHeadingCommon>

                  <StyledHeadingCommon>
                    <StyledHeadingSpan>curriculums for your</StyledHeadingSpan>
                  </StyledHeadingCommon>

                  <StyledHeadingCommon>
                    <StyledHeadingSpan>
                      collaborators/followers
                    </StyledHeadingSpan>
                  </StyledHeadingCommon>
                </StyledHeading>

                {/* New styling component started */}

                <StyledParagraph>
                  <StyledParaCommon>
                    <StyledParaSpan>
                      We have got a host of features that can enable you to
                      skyrocket your
                    </StyledParaSpan>
                  </StyledParaCommon>

                  <StyledParaCommon>
                    <StyledParaSpan>
                      workshop and course sales. Empower your collaborators by
                      delivering
                    </StyledParaSpan>
                  </StyledParaCommon>

                  <StyledParaCommon>
                    <StyledParaSpan>
                      deeply engaging experience wherever they are, anytime,
                      anywhere.
                    </StyledParaSpan>
                  </StyledParaCommon>
                </StyledParagraph>
              </StyledLeftDetail>
            </StyledLeftWrapper>
          </StyledInnerWrapper>
        </StyledWrapper>
      </StyledSection>
    </div>
  );
};
