// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button, KIND } from 'baseui/button';

// ANCHOR Scoped-Models
import { VotingTab } from 'models/scoped-models/voting/VotingTab';

// ANCHOR Styles
import { BUTTON_BACK } from './styles';

export const ElectionVotingButtonBack = React.memo(() => {
  const [setActiveTab, activeTabNum, setActiveTabNum] = VotingTab.useSelectors((
    state,
  ) => [state.setActiveTab, state.activeTabNum, state.setActiveTabNum]);

  return (
    <Button
      onClick={() => {
        const backTabIndex = activeTabNum - 1;
        setActiveTab(`${backTabIndex}`);
        setActiveTabNum(backTabIndex);
      }}
      overrides={BUTTON_BACK}
      kind={KIND.secondary}
      disabled={activeTabNum === 0}
    >
    Back
    </Button>
  );
});
