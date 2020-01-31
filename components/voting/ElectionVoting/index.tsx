// ANCHOR React
import * as React from 'react';

// ANCHOR UI Models
import { VOTE } from 'models/ui-models/vote';
import { IPosition } from 'models/interface/Vote';

// ANCHOR Base
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

// ANCHOR Components
import { CandicateCard } from '@lpsci/components/candidate-card';
import { ElectionVotingTabContainer } from '../ElectionVotingTabContainer';
import { ElectionVotingTab } from '../ElectionVotingTab';
import { ElectionVotingTabHeading } from '../ElectionVotingTabHeading';
import { ElectionVotingButtonContainer } from '../ElectionVotingButtonContainer';
import { ElectionVotingButtonBack } from '../ElectionVotingButtonBack';
import { ElectionVotingButtonNext } from '../ElectionVotingButtonNext';

export const ElectionVoting = React.memo(() => (
  <>
    <ElectionVotingTabContainer>
      {
          Object.values(IPosition).map((position, index) => (
            <ElectionVotingTab title={`Vote for ${position}`} key={index}>
              <ElectionVotingTabHeading position={position} />
              <FlexGrid
                flexGridColumnCount={2}
                flexGridColumnGap="scale400"
                flexGridRowGap="scale400"
              >
                {VOTE.map((candidate) => (
                  position === candidate.position && (
                    <FlexGridItem>
                      <CandicateCard src={candidate.imageURL} alt="test" candidateName={`${candidate.firstName} ${candidate.lastName}`} candidateParty={candidate.party.name} colorHex={candidate.party.colorHex} />
                    </FlexGridItem>
                  )
                ))}
              </FlexGrid>
            </ElectionVotingTab>
          ))
        }
    </ElectionVotingTabContainer>
    <ElectionVotingButtonContainer>
      <ElectionVotingButtonBack />
      <ElectionVotingButtonNext />
    </ElectionVotingButtonContainer>
  </>
));
