// ANCHOR React
import * as React from 'react';

// ANCHOR UI Models
import { VOTE } from 'models/ui-models/vote';
import { IPosition } from 'models/interface/Vote';

// ANCHOR Base
import { Paragraph1 } from 'baseui/typography';

// ANCHOR Components
import { ElectionVotingTabContainer } from '../ElectionVotingTabContainer';
import { ElectionVotingTab } from '../ElectionVotingTab';
import { ElectionVotingTabHeading } from '../ElectionVotingTabHeading';
import { ElectionVotingButtonContainer } from '../ElectionVotingButtonContainer';
import { ElectionVotingButtonBack } from '../ElectionVotingButtonBack';
import { ElectionVotingButtonNext } from '../ElectionVotingButtonNext';

export const ElectionVoting = React.memo(() => {

  return (
    <>
      <ElectionVotingTabContainer>
        {
          Object.values(IPosition).map(( position, index ) => (
            <ElectionVotingTab title={`Vote for ${position}`} key={index}>
              <ElectionVotingTabHeading position={position} />
              {VOTE.map((cand) => (
                position === cand.position && <Paragraph1 key={cand.firstName}>{cand.position}</Paragraph1>
              ))}
            </ElectionVotingTab>
          ))
        }
      </ElectionVotingTabContainer>
      <ElectionVotingButtonContainer>
        <ElectionVotingButtonBack />
        <ElectionVotingButtonNext />
      </ElectionVotingButtonContainer>
    </>
  );
});
