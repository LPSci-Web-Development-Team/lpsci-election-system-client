// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';

// ANCHOR Scoped Models
import { VotingTab } from 'models/scoped-models/voting/VotingTab';

// ANCHOR UI Models
import { IPosition } from 'models/interface/Vote';

// ANCHOR Components
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
  // ANCHOR Voting Tab Models
  const [vote, setVote] = VotingTab.useSelectors((state) => [
    state.vote, state.setVote,
  ]);

  // ANCHOR Active Vote Toggle
  const [on, toggle] = React.useState<boolean>(false);

  const changeActiveVote = React.useCallback(() => {
    if (vote?.candidateId === candidateUuid) {
      setVote({
        position: candidatePosition,
        candidateId: undefined,
        firstName: undefined,
        lastName: undefined,
        party: undefined,
        imageURL: undefined,
      });
    } else {
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
    }
  }, [vote]);

  React.useEffect(() => {
    if (window) {
      JSON.parse(localStorage.getItem('voteList') ?? '[{}]');
    }
    if (vote?.candidateId === candidateUuid) toggle(true);
    else toggle(false);
  }, [vote]);

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
