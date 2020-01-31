// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';
import { ICandidate } from 'models/interface/Vote';

export const VotingTab = createModel(() => {
  const [activeTab, setActiveTab] = React.useState<React.Key>('0');
  const [activeTabNum, setActiveTabNum] = React.useState<number>(0);
  const [activeVote, setActiveVote] = React.useState<ICandidate>();

  return {
    activeTab,
    setActiveTab,
    activeTabNum,
    setActiveTabNum,
    vote: activeVote,
    setVote: setActiveVote,
  };
});
