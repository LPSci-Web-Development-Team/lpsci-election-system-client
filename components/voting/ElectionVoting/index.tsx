// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped-Models
import { VotingTab } from 'models/scoped-models/voting/VotingTab';

// ANCHOR UI Models
import { VOTE } from 'models/ui-models/vote';
import { IPosition } from 'models/interface/Vote';

// ANCHOR Components
import { Paragraph1 } from 'baseui/typography';
import { ElectionVotingTabContainer } from '../ElectionVotingTabContainer';
import { ElectionVotingTab } from '../ElectionVotingTab';
import { ElectionVotingTabHeading } from '../ElectionVotingTabHeading';


export const ElectionVoting = React.memo(() => {
  const [setActiveTab, activeTabNum, setActiveTabNum] = VotingTab.useSelectors((
    state,
  ) => [state.setActiveTab, state.activeTabNum, state.setActiveTabNum]);

  return (
    <>
      <ElectionVotingTabContainer>
        {
          Object.values(IPosition).map((position) => (
            <ElectionVotingTab title={`Vote for ${position}`}>
              <ElectionVotingTabHeading position={position} />
              {VOTE.map((cand) => (
                position === cand.position && <Paragraph1>{cand.position}</Paragraph1>
              ))}
            </ElectionVotingTab>
          ))
        }
      </ElectionVotingTabContainer>
      <Button
        onClick={() => {
          const backTabIndex = activeTabNum - 1;
          setActiveTab(`${backTabIndex}`);
          setActiveTabNum(backTabIndex);
        }}
      >
        Back
      </Button>
      <Button
        onClick={() => {
          const nextTabIndex = activeTabNum + 1;
          setActiveTab(`${nextTabIndex}`);
          setActiveTabNum(nextTabIndex);
        }}
      >
        Next
      </Button>
    </>
  );
});
