import React from 'react';
import {
  StyledSection,
  StyledWrapper,
  StyledInnerWrapper,
  StyledLeftCampaign,
  StyledRightCampaign,  
  StyledPopUpBoxWrapper,
  StyledPopUpIconWrapper,
  StyledPopUpIcon,
  StyledPopUpHeading,
  StyledImageWrapper,
  StyledImage,



} from "./Campaign.styled";

export const Campaign = () => {
  return (
    <div>
      <StyledSection>
        <StyledWrapper>
          <StyledInnerWrapper>
            {/* Upar wala dot lagana ha */}
            <StyledLeftCampaign>
              <StyledPopUpBoxWrapper>
                <StyledPopUpIconWrapper>
                  <StyledPopUpIcon src="" alt="setting-icon"/>
                </StyledPopUpIconWrapper>
                <StyledPopUpHeading>
                  Available solutions
                </StyledPopUpHeading>
              </StyledPopUpBoxWrapper>
              <StyledImageWrapper>
                <StyledImage src="https://spreadd.io/assets/home/marketplace.jpg" alt="marketplace-image"/>
              </StyledImageWrapper>
            </StyledLeftCampaign>

            <StyledRightCampaign>
            </StyledRightCampaign>
          </StyledInnerWrapper>
        </StyledWrapper>
      </StyledSection>
    </div>
  )
}
