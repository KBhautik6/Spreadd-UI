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
  StyledParagraph,
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
                  <div>
                    <span>Create courses and</span>
                  </div>

                  <div>
                    <span>curriculums for your</span>
                  </div>

                  <div>
                    <span>
                      collaborators/followers
                    </span>
                  </div>
                </StyledHeading>

                {/* New styling component started */}

                <StyledParagraph>
                  <div>
                    <span>
                      We have got a host of features that can enable you to
                      skyrocket your
                    </span>
                  </div>

                  <div>
                    <span>
                      workshop and course sales. Empower your collaborators by
                      delivering
                    </span>
                  </div>

                  <div>
                    <span>
                      deeply engaging experience wherever they are, anytime,
                      anywhere.
                    </span>
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
