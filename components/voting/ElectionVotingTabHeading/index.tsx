// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { H1 } from 'baseui/typography';

// ANCHOR Styles
import { HEADING, HEADING_CONTAINER } from './styles';

interface IElectionVotingTabHeadingProps {
  position: string;
}

export const ElectionVotingTabHeading = React.memo(({ position }: IElectionVotingTabHeadingProps) => (
  <Block overrides={HEADING_CONTAINER}>
    <H1 overrides={HEADING}>{`Choose Your ${position}.`}</H1>
  </Block>
));
