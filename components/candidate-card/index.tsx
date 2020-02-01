// ANCHOR React
import * as React from 'react';

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
import { CandidateClickableDiv } from './CandidateClickableDiv';

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
  const vote = VotingTab.useSelector((state) => state.vote);

  // ANCHOR Active Vote Toggle
  const [on, toggle] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (window) {
      JSON.parse(localStorage.getItem('voteList') ?? '[{}]');
    }
    if (vote?.candidateId === candidateUuid) toggle(true);
    else toggle(false);
  }, [vote]);

  return (
    <CandidateCardContainer>
      <CandidateClickableDiv
        candidateUuid={candidateUuid}
        candidateFirstName={candidateFirstName}
        candidateLastName={candidateLastName}
        candidateParty={candidateParty}
        candidatePosition={candidatePosition}
        candidateImage={candidateImage}
        candidateColorHex={candidateColorHex}
      >
        <CandicateCardImageContainer toggled={on}>
          <CandicateCardImage src={src} alt={alt} />
          {on && <CandidateToggleIdentifier />}
          <CandidateCardName value={`${candidateFirstName} ${candidateLastName}`} />
          <CandidateCardParty value={candidateParty} colorHex={candidateColorHex} />
        </CandicateCardImageContainer>
      </CandidateClickableDiv>
    </CandidateCardContainer>
  );
});
