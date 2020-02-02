// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Tab } from 'baseui/tabs';

// ANCHOR UI Models
import { IPosition } from 'models/interface/Vote';

interface IElectionVotingTabProps {
  title: IPosition;
  children: React.ReactNode;
}

export const ElectionVotingTab = React.memo(({ title, children }: IElectionVotingTabProps) => (
  <Tab title={title}>
    {children}
  </Tab>
));
