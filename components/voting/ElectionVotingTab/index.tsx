// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Tab } from 'baseui/tabs';

// ANCHOR Utils
import { isNullOrUndefined } from 'util';

interface IElectionVotingTabProps {
  title: string;
  children: React.ReactNode;
}

export const ElectionVotingTab = React.memo(({ title, children }: IElectionVotingTabProps) => {
  // ANCHOR initiate voteList
  React.useEffect(() => {
    if (isNullOrUndefined(localStorage.getItem('voteList'))) {
      localStorage.setItem('voteList', JSON.stringify([{ position: 'President' }]));
    }
  }, []);

  return (
    <Tab title={title}>
      {children}
    </Tab>
  );
});
