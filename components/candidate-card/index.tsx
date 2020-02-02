// ANCHOR React
import * as React from 'react';

// ANCHOR Scoped Models
import { VotingTab } from 'models/scoped-models/voting/VotingTab';
import { CandidateCard } from 'models/scoped-models/candidate-card/CandidateCard';

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
  positionIndex: number;
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
  positionIndex,
}: IProps) => {
  // ANCHOR Voting Tab Models
  const vote = VotingTab.useSelector((state) => state.vote);

  // ANCHOR Candidate Card Models
  const [selected, setSelected] = CandidateCard.useSelectors((state) => [
    state.selected, state.setSelected,
  ]);

  // ANCHOR Active Vote Toggle
  const [on, toggle] = React.useState<boolean>(false);

  // ANCHOR Check for previously voted candidate
  React.useEffect(() => {
    if (vote.candidateId === candidateUuid) {
      toggle(true);
    } else {
      toggle(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vote]);

  // ANCHOR Check if voter already selected a candidate
  React.useEffect(() => {
    if (on) {
      setSelected(!selected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on, vote]);

  return (
    <CandidateCardContainer>
      <CandidateClickableDiv
        positionIndex={positionIndex}
        candidateUuid={candidateUuid}
        candidateFirstName={candidateFirstName}
        candidateLastName={candidateLastName}
        candidateParty={candidateParty}
        candidatePosition={candidatePosition}
        candidateImage={candidateImage}
        candidateColorHex={candidateColorHex}
      >
        <CandicateCardImageContainer toggled={on}>
          <CandicateCardImage src={src} alt={alt} toggle={on} selected={selected} />
          {on && <CandidateToggleIdentifier />}
          <CandidateCardName value={`${candidateFirstName} ${candidateLastName}`} />
          <CandidateCardParty value={candidateParty} colorHex={candidateColorHex} />
        </CandicateCardImageContainer>
      </CandidateClickableDiv>
    </CandidateCardContainer>
  );
});
