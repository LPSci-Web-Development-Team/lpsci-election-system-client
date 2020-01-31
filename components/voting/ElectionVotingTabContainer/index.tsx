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
  const [activeTab, setActiveTab] = VotingTab.useSelectors((
    state,
  ) => [state.activeTab, state.setActiveTab]);

  return (
    <Tabs
      onChange={({ activeKey }) => {
        setActiveTab(activeKey);
      }}
      overrides={ELECTION_TAB}
      activeKey={activeTab}
    >
      {children}
    </Tabs>
  );
});
