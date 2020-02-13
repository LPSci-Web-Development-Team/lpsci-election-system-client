/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Link from 'next/link';

// ANCHOR  js-cookie
import cookies from 'js-cookie';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped-Models
import { VotingTab } from 'scoped-models/voting/VotingTab';

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

  const gradeLevel = parseInt(cookies.get('gradeLevel') ?? '0', 10);

  // ANCHOR Vote List
  let uniqueCandidate = [];
  let filteredList: IVoteList[] = [];

  // ANCHOR Action Button Logic
  const positionLength: number = gradeLevel !== 12
    ? Object.values(IPosition).length - 5
    : Object.values(IPosition).length - 6;
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
          list.id === l.id && list.position === l.position
        )),
      );

      // ANCHOR Filter duplicate position
      // eslint-disable-next-line react-hooks/exhaustive-deps
      filteredList = uniqueCandidate.filter(
        (list, index, self) => index === self.findIndex((l) => (
          list.index === l.index
        )),
      );
    });
    localStorage.setItem('voteList', JSON.stringify(filteredList));
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
    changeVoteList(vote.index ?? 0);
  }, [changeVoteList, nextActiveTab, nextVoteList, vote]);

  const reviewTab = React.useCallback(() => {
    nextVoteList(vote);
  }, [nextVoteList, vote]);

  return (
    <>
      { !isDoneVoting ? (
        <Button
          onClick={nextTab}
          overrides={BUTTON_NEXT}
        >
          {vote.id ? 'Vote' : 'Abstain'}
        </Button>
      ) : (
        <Link href="/review">
          <Button
            onClick={reviewTab}
            overrides={BUTTON_NEXT}
          >
              Review Votes
          </Button>
        </Link>
      )}
    </>
  );
});
