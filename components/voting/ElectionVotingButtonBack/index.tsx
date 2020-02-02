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
  const [setActiveTab, activeTabNum, setActiveTabNum, vote, setVote] = VotingTab.useSelectors((
    state,
  ) => [state.setActiveTab, state.activeTabNum, state.setActiveTabNum, state.vote, state.setVote]);

  // ANCHOR Vote List
  const [voteList, setVoteList] = React.useState<IVoteList[]>();

  // ANCHOR Active Tab
  const [stored, setStored] = React.useState<number>(0);

  React.useEffect(() => {
    if (window) {
      setVoteList(JSON.parse(localStorage.getItem('voteList') ?? '[{}]'));
      setStored(parseInt(localStorage.getItem('activeTab') ?? '0', 0) - 1);
    }
  }, [activeTabNum]);

  const backVoteList = (storedIndex: number) => {
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
  };

  const backTab = React.useCallback(() => {
    backVoteList(stored);
    const backTabIndex = activeTabNum - 1;
    setActiveTab(`${backTabIndex}`);
    setActiveTabNum(backTabIndex);
    localStorage.setItem('activeTab', `${backTabIndex}`);
  }, [activeTabNum, vote]);

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
