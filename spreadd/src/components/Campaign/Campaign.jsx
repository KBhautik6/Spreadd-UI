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
  StyledCardWrapper,
  StyledCardIconWrapper,
  StyledCardIcon,
  StyledCardHeading,
  StyledCardText,
  StyledCampaignDetail,
  StyledCampaign,
  StyledCampaignHeading,
  StyledCampaignText


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
                  <StyledPopUpIcon src="https://spreadd.io/assets/home/setting.svg" alt="setting-icon"/>
                </StyledPopUpIconWrapper>
                <StyledPopUpHeading>
                  Available solutions
                </StyledPopUpHeading>
              </StyledPopUpBoxWrapper>
              
              <StyledImageWrapper>
                <StyledImage src="https://spreadd.io/assets/home/marketplace.jpg" alt="marketplace-image"/>
              </StyledImageWrapper>

              <StyledCardWrapper>
                <StyledCardIconWrapper>
                  <StyledCardIcon src="https://spreadd.io/assets/home/bulb.svg" alt="bulb-icon"/>
                </StyledCardIconWrapper>
                <StyledCardHeading>
                  Easy Methods
                </StyledCardHeading>
                <StyledCardText>
                  We Have the best ideas for your Brand
                </StyledCardText>
              </StyledCardWrapper>
            </StyledLeftCampaign>

            <StyledRightCampaign>
              <StyledCampaignDetail>
                <StyledCampaign>
                  Campaign marketplace
                </StyledCampaign>
                <StyledCampaignHeading>
                Participate in campaigns & build relationships with brands
                </StyledCampaignHeading>
                <StyledCampaignText>
                Join our campaign marketplace to deliver content, build strong relationships with brands and receive agreement-based timely payouts.
                </StyledCampaignText>
              </StyledCampaignDetail>
            </StyledRightCampaign>
          </StyledInnerWrapper>
        </StyledWrapper>
      </StyledSection>
    </div>
  )
}
