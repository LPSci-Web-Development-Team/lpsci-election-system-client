/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button, KIND } from 'baseui/button';

// ANCHOR Scoped-Models
import { VotingTab } from 'models/scoped-models/voting/VotingTab';

// ANCHOR UI Models
import { IVoteList } from 'models/interface/Vote';

// ANCHOR Styles
import { BUTTON_BACK } from './styles';

export const ElectionVotingButtonBack = React.memo(() => {
  // ANCHOR Voting Tab Models
  const [
    setActiveTab, activeTabNum, setActiveTabNum, setVote, voteList,
  ] = VotingTab.useSelectors((
    state,
  ) => [
    state.setActiveTab,
    state.activeTabNum,
    state.setActiveTabNum,
    state.setVote,
    state.voteList,
  ]);

  // ANCHOR Change vote list depending on previous tab
  const backVoteList = React.useCallback((storedIndex: number) => {
    voteList?.forEach((item: IVoteList) => {
      if (item.index === storedIndex) {
        setVote({
          index: item.index,
          candidateId: item.candidateId,
          firstName: item.firstName,
          lastName: item.lastName,
          party: item.party,
          position: item.position,
          imageURL: item.imageURL,
        });
      }
    });
  }, [setVote, voteList]);

  // ANCHOR Go to Previous Tab
  const backActiveTab = React.useCallback(() => {
    const backTabIndex = activeTabNum - 1;
    setActiveTab(`${backTabIndex}`);
    setActiveTabNum(backTabIndex);
    localStorage.setItem('activeTab', `${backTabIndex}`);
  }, [activeTabNum, setActiveTab, setActiveTabNum]);

  const backTab = React.useCallback(() => {
    backVoteList(activeTabNum - 1);
    backActiveTab();
  }, [activeTabNum, backActiveTab, backVoteList]);

  return (
    <Button
      onClick={backTab}
      overrides={BUTTON_BACK}
      kind={KIND.secondary}
      disabled={activeTabNum === 0}
    >
    Back
    </Button>
  );
});
