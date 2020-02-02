// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Tabs } from 'baseui/tabs';

// ANCHOR Components

// ANCHOR Styles
import { VotingTab } from 'models/scoped-models/voting/VotingTab';
import { ELECTION_TAB } from './styles';

interface IElectionVotingTabProps {
  children: React.ReactNode;
}

export const ElectionVotingTabContainer = React.memo(({ children }: IElectionVotingTabProps) => {
  // ANCHOR Voting Tab Models
  const [watcher, setActiveTab, setActiveTabNum, setVoteList] = VotingTab.useSelectors((state) => [
    state.activeTab, state.setActiveTab, state.setActiveTabNum, state.setVoteList,
  ]);

  // ANCHOR Initiate stored tab
  const [stored, setStored] = React.useState<string>('0');

  // ANCHOR Local storage
  React.useEffect(() => {
    // ANCHOR Initiate active tab
    setStored(localStorage.getItem('activeTab') ?? watcher);
    setActiveTab(stored);
    setActiveTabNum(parseInt(stored, 10));
  }, [stored, watcher]);

  React.useEffect(() => {
    // ANCHOR Initiate vote list
    setVoteList(JSON.parse(localStorage.getItem('voteList') ?? '[{}]'));
  }, [watcher]);

  return (
    <Tabs
      overrides={ELECTION_TAB}
      activeKey={stored}
    >
      {children}
    </Tabs>
  );
});
