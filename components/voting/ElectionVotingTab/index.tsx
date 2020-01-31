// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Tab } from 'baseui/tabs';

interface IElectionVotingTabProps {
  title: string;
  children: React.ReactNode;
}

export const ElectionVotingTab = React.memo(({ title, children }: IElectionVotingTabProps) => (
  <Tab title={title}>
    {children}
  </Tab>
));
