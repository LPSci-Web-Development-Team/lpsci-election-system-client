// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';

// ANCHOR Components
import { VotingTab } from 'models/scoped-models/voting/VotingTab';
import { IPosition } from 'models/interface/Vote';
import { useConstantCallback } from '@lpsci/utils/hooks/useConstantCallback';
import { CandicateCardImageContainer } from './CandidateCardImageContainer';
import { CandicateCardImage } from './CandidateCardImage';
import { CandidateCardName } from './CandidateCardName';
import { CandidateCardParty } from './CandidateCardParty';
import { CandidateToggleIdentifier } from './CandidateToggleIdentifier';
import { CandidateCardContainer } from './CandidateCardContainer';

interface IProps {
  src: string;
  alt: string;
  candidateUuid: string;
  candidateFirstName: string;
  candidateLastName: string;
  candidateParty: string;
  candidatePosition: IPosition;
  candidateImage: string;
  candidateColorHex: string;
}

const ClickableDiv = styled('div',
  {
    width: '100%',
    height: '100%',
  });

export const CandicateCard = React.memo(({
  src,
  alt,
  candidateUuid,
  candidateFirstName,
  candidateLastName,
  candidateParty,
  candidatePosition,
  candidateImage,
  candidateColorHex,
}: IProps) => {
  const [vote, setVote] = VotingTab.useSelectors((state) => [
    state.vote, state.setVote,
  ]);
  const [on, toggle] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (vote?.candidateId === candidateUuid) toggle(true);
    else toggle(false);
  }, [vote]);

  const changeActiveVote = useConstantCallback(() => {
    setVote({
      candidateId: candidateUuid,
      firstName: candidateFirstName,
      lastName: candidateLastName,
      party: {
        name: candidateParty,
        colorHex: candidateColorHex,
      },
      position: candidatePosition,
      imageURL: candidateImage,
    });
  });

  return (
    <CandidateCardContainer>
      <ClickableDiv onClick={changeActiveVote}>
        <CandicateCardImageContainer toggled={on}>
          <CandicateCardImage src={src} alt={alt} />
          {on && <CandidateToggleIdentifier />}
          <CandidateCardName value={`${candidateFirstName} ${candidateLastName}`} />
          <CandidateCardParty value={candidateParty} colorHex={candidateColorHex} />
        </CandicateCardImageContainer>
      </ClickableDiv>
    </CandidateCardContainer>
  );
});
