// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

export const VotingTab = createModel(() => {
  const [activeTab, setActiveTab] = React.useState<string>('0');
  const [activeTabNum, setActiveTabNum] = React.useState<number>(0);

  return {
    activeTab,
    setActiveTab,
    activeTabNum,
    setActiveTabNum,
  };
});
