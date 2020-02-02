/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped-Models
import { VotingTab } from 'models/scoped-models/voting/VotingTab';

// ANCHOR UI Models
import { IPosition, IVoteList } from 'models/interface/Vote';

// ANCHOR Styles
import { BUTTON_NEXT } from './styles';

export const ElectionVotingButtonNext = React.memo(() => {
  // ANCHOR Voting Tabs Model
  const [setActiveTab, activeTabNum, setActiveTabNum, vote, voteList] = VotingTab.useSelectors((
    state,
  ) => [state.setActiveTab, state.activeTabNum, state.setActiveTabNum, state.vote, state.voteList]);

  // ANCHOR Vote List
  let uniqueCandidate = [];
  let filteredList = [];

  // ANCHOR Action Button Logic
  const positionLength: number = Object.values(IPosition).length - 1;
  const isDoneVoting = positionLength === activeTabNum;

  const nextVoteList = (activeVote: IVoteList) => {
    voteList?.forEach((item: IVoteList) => {
      // ANCHOR Push or Update Logic
      if (item.position === activeVote.position) {
        Object.assign(item, activeVote);
      } else {
        voteList.push(activeVote);
      }

      // ANCHOR Filter duplicate candidate vote
      uniqueCandidate = voteList.filter(
        (list, index, self) => index === self.findIndex((l) => (
          list.candidateId === l.candidateId && list.position === l.position
        )),
      );

      // ANCHOR Filter duplicate position
      filteredList = uniqueCandidate.filter(
        (list, index, self) => index === self.findIndex((l) => (
          list.position === l.position
        )),
      );
      localStorage.setItem('voteList', JSON.stringify(filteredList));
    });
  };

  const nextTab = React.useCallback(() => {
    nextVoteList(vote);
    const nextTabIndex = activeTabNum + 1;
    setActiveTab(`${nextTabIndex}`);
    setActiveTabNum(nextTabIndex);
    localStorage.setItem('activeTab', `${nextTabIndex}`);
  }, [activeTabNum, vote]);

  return (
    <>
      { !isDoneVoting ? (
        <Button
          onClick={nextTab}
          overrides={BUTTON_NEXT}
        >
          {vote.candidateId ? 'Next' : 'Abstain'}
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
