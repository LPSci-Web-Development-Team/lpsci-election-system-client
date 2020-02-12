// ANCHOR React
import * as React from 'react';

// ANCHOR Utils
import { getCandidate } from '@lpsci/utils/api/candidate';

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
  ({ position, positionIndex }: IElectionVotingFlexProps) => {
    const [fetchedCandidate, setFetchedCandidate] = React.useState<any>([]);
    const temporaryFetch: any = [];

    React.useEffect(() => {
      getCandidate()
        .then((response) => {
          response.data.map((item: any) => (
            temporaryFetch.push(item)
          ));
          setFetchedCandidate([...temporaryFetch]);
        });
    }, [temporaryFetch]);

    return (
      <FlexGrid
        flexGridColumnCount={2}
        flexGridColumnGap="scale500"
        flexGridRowGap="scale600"
        overrides={FLEX}
      >
        {fetchedCandidate.map((candidate: any) => (
          position === candidate.position && (
          <FlexGridItem key={candidate.id}>
            <CandicateCard
              src={candidate.imgUrl}
              alt={candidate.firstName}
              positionIndex={positionIndex}
              candidateUuid={candidate.id}
              candidateFirstName={candidate.firstName}
              candidateLastName={candidate.lastName}
              candidateParty={candidate.partyId}
              candidatePosition={candidate.position}
              candidateImage={candidate.imgUrl}
            />
          </FlexGridItem>
          )
        ))}
      </FlexGrid>
    );
  },
);
