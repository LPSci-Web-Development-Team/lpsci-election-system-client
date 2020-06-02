// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';
import { IVoteList, IPosition } from 'models/interface/Vote';

export const VotingTab = createModel(() => {
  const [activeTab, setActiveTab] = React.useState<string>('0');
  const [activeTabNum, setActiveTabNum] = React.useState<number>(0);
  const [activeVote, setActiveVote] = React.useState<IVoteList>({
    index: 0,
    position: IPosition.President,
    id: undefined,
    firstName: undefined,
    lastName: undefined,
    party: undefined,
    imageURL: undefined,
  });
  const [voteList, setVoteList] = React.useState<IVoteList[]>();

  return {
    activeTab,
    setActiveTab,
    activeTabNum,
    setActiveTabNum,
    vote: activeVote,
    setVote: setActiveVote,
    voteList,
    setVoteList,
  };
});
