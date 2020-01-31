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
  const [watcher, setActiveTab, setActiveTabNum] = VotingTab.useSelectors((state) => [
    state.activeTab, state.setActiveTab, state.setActiveTabNum,
  ]);
  const [stored, setStored] = React.useState<string>('0');

  // ANCHOR Local storage
  React.useEffect(() => {
    setStored(localStorage.getItem('activeTab') ?? watcher);
    setActiveTab(stored);
    setActiveTabNum(parseInt(stored, 10));
  }, [watcher, stored]);

  return (
    <Tabs
      overrides={ELECTION_TAB}
      activeKey={stored}
    >
      {children}
    </Tabs>
  );
});
