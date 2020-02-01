// ANCHOR React
import * as React from 'react';

// ANCHOR UI Models
import { IPosition } from 'models/interface/Vote';

// ANCHOR Components
import { ElectionVotingTabContainer } from '../ElectionVotingTabContainer';
import { ElectionVotingTab } from '../ElectionVotingTab';
import { ElectionVotingTabHeading } from '../ElectionVotingTabHeading';
import { ElectionVotingButtonContainer } from '../ElectionVotingButtonContainer';
import { ElectionVotingButtonBack } from '../ElectionVotingButtonBack';
import { ElectionVotingButtonNext } from '../ElectionVotingButtonNext';
import { ElectionVotingFlexGrid } from '../ElectionVotingFlexGrid';

export const ElectionVoting = React.memo(() => (
  <>
    <ElectionVotingTabContainer>
      {
          Object.values(IPosition).map((position, index) => (
            <ElectionVotingTab title={`Vote for ${position}`} key={index}>
              <ElectionVotingTabHeading position={position} />
              <ElectionVotingFlexGrid position={position} />
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
