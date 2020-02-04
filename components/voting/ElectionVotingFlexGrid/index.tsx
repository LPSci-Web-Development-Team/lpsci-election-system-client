// ANCHOR React
import * as React from 'react';

// ANCHOR UI Models
import { VOTE } from 'models/ui-models/vote';

// ANCHOR Base
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

// ANCHOR Components
import { CandicateCard } from 'components/candidate-card';

// ANCHOR Styles
import { FLEX } from './styles';

interface IElectionVotingFlexProps {
  position: string | null;
  positionIndex: number;
}

export const ElectionVotingFlexGrid = React.memo(
  ({ position, positionIndex }: IElectionVotingFlexProps) => (
    <FlexGrid
      flexGridColumnCount={2}
      flexGridColumnGap="scale500"
      flexGridRowGap="scale600"
      overrides={FLEX}
    >
      {VOTE.map((candidate, index) => (
        position === candidate.position && (
        <FlexGridItem key={index}>
          <CandicateCard
            src={candidate.imageURL}
            alt={candidate.firstName}
            positionIndex={positionIndex}
            candidateUuid={candidate.candidateId}
            candidateFirstName={candidate.firstName}
            candidateLastName={candidate.lastName}
            candidateParty={candidate.party.name}
            candidatePosition={candidate.position}
            candidateImage={candidate.imageURL}
            candidateColorHex={candidate.party.colorHex}
          />
        </FlexGridItem>
        )
      ))}
    </FlexGrid>
  ),
);
