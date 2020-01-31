// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped-Models
import { VotingTab } from 'models/scoped-models/voting/VotingTab';

// ANCHOR Styles
import { BUTTON_NEXT } from './styles';

export const ElectionVotingButtonNext = React.memo(() => {
  const [setActiveTab, activeTabNum, setActiveTabNum] = VotingTab.useSelectors((
    state,
  ) => [state.setActiveTab, state.activeTabNum, state.setActiveTabNum]);

  return (
    <Button
      onClick={() => {
        const nextTabIndex = activeTabNum + 1;
        setActiveTab(`${nextTabIndex}`);
        setActiveTabNum(nextTabIndex);
      }}
      overrides={BUTTON_NEXT}
    >
      Next
    </Button>
  );
});
