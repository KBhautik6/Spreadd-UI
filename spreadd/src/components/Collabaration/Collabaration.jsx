import React from "react";
import {
  StyledSection,
  StyledCollaboration,
  StyledWrapper,
  StyledInnerWrapper,
  StyledLeftCollaboration,
  StyledCollaborationHeading,
  StyledCollaborationText,
  StyledRightCollaboration,
  StyledCollaborationHandImage,
  StyledHandImage,
  StyledCollaborationTalkImage,
  StyledTalkImage,
  StyledCreatorTagWrapper,
  StyledCreatorTag,
} from "./Collabaration.styled";

export const Collabaration = () => {
  return (
    <div>
      <StyledSection>
        <StyledCollaboration>
          <StyledWrapper>
            <StyledInnerWrapper>
              <StyledLeftCollaboration>
                <StyledCollaborationHeading>
                  Get ready for seamless collaborations, with personalised
                  content and insights.
                </StyledCollaborationHeading>
                <StyledCollaborationText>
                  Spreadd is a decentralised ecosystem for creators economy
                  giving commercial mobility to brands, creators helping
                  accelerate their growth.
                </StyledCollaborationText>
              </StyledLeftCollaboration>

              <StyledRightCollaboration>
                <StyledCollaborationHandImage>
                  <StyledHandImage
                    src="https://spreadd.io/23139c22a9dbe19db52db946b5655757.jpg"
                    alt="hand-collab"
                  />
                </StyledCollaborationHandImage>
                <StyledCollaborationTalkImage>
                  <StyledTalkImage
                    src="https://spreadd.io/97c4edf916b8ca47f84b658b2b139441.jpg"
                    alt="Talk-people"
                  />
                </StyledCollaborationTalkImage>
                <StyledCreatorTagWrapper>
                  <StyledCreatorTag>1.37k+ Creators</StyledCreatorTag>
                </StyledCreatorTagWrapper>
              </StyledRightCollaboration>
            </StyledInnerWrapper>
          </StyledWrapper>
        </StyledCollaboration>
      </StyledSection>
    </div>
  );
};
