// ANCHOR React
import * as React from 'react';

// ANCHOR Scoped Models
import { VotingTab } from 'scoped-models/voting/VotingTab';
import { CandidateCard } from 'scoped-models/candidate-card/CandidateCard';

// ANCHOR UI Models
import { IPosition } from 'models/interface/Vote';

// ANCHOR Utils
import { getParty } from '@lpsci/utils/api/candidate';

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

  React.useEffect(() => {
    // ANCHOR Check for previously voted candidate
    if (vote.candidateId === candidateUuid) {
      toggle(true);
    } else {
      toggle(false);
    }

    // ANCHOR Check for if candidate is selected
    if (on) {
      setSelected(!selected);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [candidateUuid, on, setSelected, vote]);

  const [party, setParty] = React.useState({
    name: '',
    hexColor: '',
  });

  React.useEffect(() => {
    getParty(candidateParty)
      .then((response) => {
        setParty({
          name: response.data.name,
          hexColor: response.data.hexColor,
        });
      });
  }, [candidateParty]);

  return (
    <CandidateCardContainer>
      <CandidateClickableDiv
        positionIndex={positionIndex}
        candidateUuid={candidateUuid}
        candidateFirstName={candidateFirstName}
        candidateLastName={candidateLastName}
        candidateParty={party.name}
        candidatePosition={candidatePosition}
        candidateImage={candidateImage}
        candidateColorHex={party.hexColor}
      >
        <CandicateCardImageContainer toggle={on} selected={selected}>
          <CandicateCardImage src={src} alt={alt} />
          {on && <CandidateToggleIdentifier />}
          <CandidateCardName value={`${candidateFirstName} ${candidateLastName}`} />
          <CandidateCardParty value={party.name} colorHex={party.hexColor} />
        </CandicateCardImageContainer>
      </CandidateClickableDiv>
    </CandidateCardContainer>
  );
});
