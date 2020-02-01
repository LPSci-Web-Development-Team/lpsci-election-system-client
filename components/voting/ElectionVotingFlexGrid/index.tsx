// ANCHOR React
import * as React from 'react';

// ANCHOR UI Models
import { VOTE } from 'models/ui-models/vote';

// ANCHOR Base
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { BlockProps } from 'baseui/block';

// ANCHOR Components
import { CandicateCard } from '@lpsci/components/candidate-card';

const FLEX: BlockProps = {
  marginTop: '150px',
};

interface IElectionVotingFlexProps {
  position: string | null;
}

export const ElectionVotingFlexGrid = React.memo(({ position }: IElectionVotingFlexProps) => (
  <FlexGrid
    flexGridColumnCount={2}
    flexGridColumnGap="scale500"
    flexGridRowGap="scale600"
    {...FLEX}
  >
    {VOTE.map((candidate, index) => (
      position === candidate.position && (
        <FlexGridItem key={index}>
          <CandicateCard
            src={candidate.imageURL}
            alt={candidate.firstName}
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
));
