// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Models
import { VotingTab } from 'models/scoped-models/voting/VotingTab';

// ANCHOR Components
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
        <ElectionVotingTab title="Vote President">
          <ElectionVotingTabHeading position="President" />
        </ElectionVotingTab>
        <ElectionVotingTab title="Vote Vice President">
          <ElectionVotingTabHeading position="Vice President" />
        </ElectionVotingTab>
        <ElectionVotingTab title="Vote Secretary">
          <ElectionVotingTabHeading position="Secretary" />
        </ElectionVotingTab>
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
