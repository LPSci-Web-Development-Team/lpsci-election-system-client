// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { BUTTON_CONTAINER } from './styles';

interface IElectionVotingButtonProps {
  children: React.ReactNode;
}

export const ElectionVotingButtonContainer = React.memo(({children}: IElectionVotingButtonProps) => (
  <Block overrides={BUTTON_CONTAINER}>
    {children}
  </Block>
));
