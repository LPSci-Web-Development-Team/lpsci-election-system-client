// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped-Models
import { VotingTab } from 'models/scoped-models/voting/VotingTab';

// ANCHOR UI Models
import { IPosition } from 'models/interface/Vote';

// ANCHOR Styles
import { BUTTON_NEXT } from './styles';

export const ElectionVotingButtonNext = React.memo(() => {
  const [setActiveTab, activeTabNum, setActiveTabNum] = VotingTab.useSelectors((
    state,
  ) => [state.setActiveTab, state.activeTabNum, state.setActiveTabNum, state.vote]);

  const positionLength: number = Object.values(IPosition).length - 1;
  const isDoneVoting = positionLength === activeTabNum;

  const nextTab = React.useCallback(() => {
    const nextTabIndex = activeTabNum + 1;
    setActiveTab(`${nextTabIndex}`);
    setActiveTabNum(nextTabIndex);
    localStorage.setItem('activeTab', `${nextTabIndex}`);
  }, [activeTabNum]);

  return (
    <>
      { !isDoneVoting ? (
        <Button
          onClick={nextTab}
          overrides={BUTTON_NEXT}
        >
        Next
        </Button>
      ) : (
        <Button
          onClick={() => {
            const nextTabIndex = activeTabNum + 1;
            setActiveTab(`${nextTabIndex}`);
            setActiveTabNum(nextTabIndex);
          }}
          overrides={BUTTON_NEXT}
        >
          Review Votes
        </Button>
      )}
    </>
  );
});
