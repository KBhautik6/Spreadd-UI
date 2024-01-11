import React from "react";
import {
  StyledSection,
  StyledWrapper,
  StyledHeadingWrapper,
  StyledHeading,
  StyledText,
  StyledBoxWrapper,
  StyledBox,
  StyledBoxIconWrapper,
  StyledBoxIcon,
  StyledBoxHeading,
  StyledBoxText,
} from "./WhySpreadd.styled";

export const WhySpreadd = () => {
  return (
    <div>
      <StyledSection>
        <StyledWrapper>
          <StyledHeadingWrapper>
            <StyledHeading>Why Spreadd?</StyledHeading>
            <StyledText>
              Its time to give your ideas the wings they need. Bring them on to
              Spreadd and see them grow.
            </StyledText>
          </StyledHeadingWrapper>

          <StyledBoxWrapper>
            <StyledBox>
              <StyledBoxIconWrapper>
                <StyledBoxIcon
                  src="https://spreadd.io/assets/home/whyspreadd/marketplace.svg"
                  alt="community-icon"
                />
              </StyledBoxIconWrapper>
              <StyledBoxHeading>No middle-man</StyledBoxHeading>
              <StyledBoxText>
                Spreadd helps you to get in touch with your brand ambassadors
                directly. Avoid paying extra cuts to multiple agencies. We are
                here to save your money.
              </StyledBoxText>
            </StyledBox>

            <StyledBox>
              <StyledBoxIconWrapper>
                <StyledBoxIcon
                  src="https://spreadd.io/assets/home/whyspreadd/marketplace.svg"
                  alt="nft-icon"
                />
              </StyledBoxIconWrapper>
              <StyledBoxHeading>NFT marketplace</StyledBoxHeading>
              <StyledBoxText>
                Buy, sell and discover exclusive digital items to use within
                your marketing campaign. Our ad inventory gives you millions of
                option to select the content and customise as per your need to
                reuse in your campaigns.
              </StyledBoxText>
            </StyledBox>

            <StyledBox>
              <StyledBoxIconWrapper>
                <StyledBoxIcon
                  src="https://spreadd.io/assets/home/whyspreadd/sales.svg"
                  alt="sales-icon"
                />
              </StyledBoxIconWrapper>
              <StyledBoxHeading>Increase your product sale</StyledBoxHeading>
              <StyledBoxText>
                Want to get your product sold without extra costs? Want to make
                your product reach to more engaged community? Don’t worry, we
                got that covered with our creator stores.
              </StyledBoxText>
            </StyledBox>
          </StyledBoxWrapper>
        </StyledWrapper>
      </StyledSection>
    </div>
  );
};
