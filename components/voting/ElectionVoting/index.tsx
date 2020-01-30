// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { H1 } from 'baseui/typography';
import { Tabs, Tab } from 'baseui/tabs';
import { Button } from 'baseui/button';

// ANCHOR Components

// ANCHOR Styles
import { HEADING, HEADING_CONTAINER, ELECTION_TAB } from './styles';

export const ElectionVoting = React.memo(() => {
  const [activeTab, setActiveTab] = React.useState<any>('0');
  const [activeTabNum, setActiveTabNum] = React.useState<any>(0);

  return (
    <>
      <Tabs
        onChange={({ activeKey }) => {
          setActiveTab(activeKey);
        }}
        overrides={ELECTION_TAB}
        activeKey={activeTab}
      >
        <Tab title="Vote President">
          <Block overrides={HEADING_CONTAINER}>
            <H1 overrides={HEADING}>Choose Your President.</H1>
          </Block>
        </Tab>
        <Tab title="Vote Vice President">
          <Block overrides={HEADING_CONTAINER}>
            <H1 overrides={HEADING}>Choose Your Vice President.</H1>
          </Block>
        </Tab>
        <Tab title="Vote Secretary">
          <Block overrides={HEADING_CONTAINER}>
            <H1 overrides={HEADING}>Choose Your Secretary.</H1>
          </Block>
        </Tab>
      </Tabs>
      <Button
        onClick={() => {
          const backTabIndex = activeTabNum - 1;
          setActiveTab(`${backTabIndex}`);
          setActiveTabNum(backTabIndex);
        }}
      >
        Back
      </Button>
      <Button
        onClick={() => {
          const nextTabIndex = activeTabNum + 1;
          setActiveTab(`${nextTabIndex}`);
          setActiveTabNum(nextTabIndex);
        }}
      >
        Next
      </Button>
    </>
  );
});
