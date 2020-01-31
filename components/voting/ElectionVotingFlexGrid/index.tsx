// ANCHOR React
import * as React from 'react';

// ANCHOR UI Models
import { VOTE } from 'models/ui-models/vote';
import { IPosition } from 'models/interface/Vote';

// ANCHOR Base
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { BlockProps } from 'baseui/block';

// ANCHOR Components
import { CandicateCard } from '@lpsci/components/candidate-card';

const FLEX: BlockProps = {
  marginTop: '150px',
};

interface IElectionVotingFlexProps {
  position: IPosition;
}

export const ElectionVotingFlexGrid = React.memo(({ position }: IElectionVotingFlexProps) => (
  <FlexGrid
    flexGridColumnCount={2}
    flexGridColumnGap="scale500"
    flexGridRowGap="scale600"
    {...FLEX}
  >
    {VOTE.map((candidate) => (
      position === candidate.position && (
        <FlexGridItem>
          <CandicateCard src={candidate.imageURL} alt="test" candidateName={`${candidate.firstName} ${candidate.lastName}`} candidateParty={candidate.party.name} colorHex={candidate.party.colorHex} />
        </FlexGridItem>
      )
    ))}
  </FlexGrid>
));
