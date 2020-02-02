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
  const [
    setActiveTab, activeTabNum, setActiveTabNum, vote, setVote, voteList,
  ] = VotingTab.useSelectors((
    state,
  ) => [
    state.setActiveTab, state.activeTabNum, state.setActiveTabNum,
    state.vote, state.setVote, state.voteList,
  ]);

  // ANCHOR Vote List
  let uniqueCandidate = [];
  let filteredList = [];

  // ANCHOR Action Button Logic
  const positionLength: number = Object.values(IPosition).length - 1;
  const isDoneVoting = positionLength === activeTabNum;

  // ANCHOR Push or Update Logic
  const nextVoteList = React.useCallback((activeVote: IVoteList) => {
    voteList?.forEach((item: IVoteList) => {
      item.position === activeVote.position
        ? Object.assign(item, activeVote)
        : voteList.push(activeVote);

      // ANCHOR Filter duplicate candidate vote
      // eslint-disable-next-line react-hooks/exhaustive-deps
      uniqueCandidate = voteList.filter(
        (list, index, self) => index === self.findIndex((l) => (
          list.candidateId === l.candidateId && list.position === l.position
        )),
      );

      // ANCHOR Filter duplicate position
      // eslint-disable-next-line react-hooks/exhaustive-deps
      filteredList = uniqueCandidate.filter(
        (list, index, self) => index === self.findIndex((l) => (
          list.index === l.index
        )),
      );
      localStorage.setItem('voteList', JSON.stringify(filteredList));
    });
  }, [vote]);

  // ANCHOR Go To Next Tab
  const nextActiveTab = React.useCallback(() => {
    const nextTabIndex = activeTabNum + 1;
    setActiveTab(`${nextTabIndex}`);
    setActiveTabNum(nextTabIndex);
    localStorage.setItem('activeTab', `${nextTabIndex}`);
  }, [activeTabNum, setActiveTab, setActiveTabNum]);

  // ANCHOR Change Vote List Depending on next tab
  const changeVoteList = React.useCallback((index: number) => {
    const nextIndex = index + 1;
    let nextActiveVote;
    const abstainVote: IVoteList = {
      index: nextIndex,
    };
    if (voteList) {
      nextActiveVote = voteList.find((item: IVoteList) => item.index === nextIndex);
    }
    setVote(nextActiveVote ?? abstainVote);
  }, [setVote, voteList]);

  const nextTab = React.useCallback(() => {
    nextVoteList(vote);
    nextActiveTab();
    changeVoteList(vote.index);
  }, [changeVoteList, nextActiveTab, nextVoteList, vote]);

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
          onClick={nextTab}
          overrides={BUTTON_NEXT}
        >
          Review Votes
        </Button>
      )}
    </>
  );
});
