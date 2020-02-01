// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { H1 } from 'baseui/typography';

// ANCHOR Models
import { VotingTab } from 'models/scoped-models/voting/VotingTab';
import { IPosition } from 'models/interface/Vote';

// ANCHOR Styles
import { HEADING, HEADING_CONTAINER } from './styles';

interface IElectionVotingTabHeadingProps {
  position: IPosition;
  positionIndex: number;
}

export const ElectionVotingTabHeading = React.memo(
  ({ position, positionIndex }: IElectionVotingTabHeadingProps) => {
  // ANCHOR Voting Tabs Model
    const [setVote] = VotingTab.useSelectors((state) => [
      state.setVote,
    ]);

    React.useEffect(() => {
      setVote({
        index: positionIndex,
        position,
      });
    }, [position]);

    return (
      <Block overrides={HEADING_CONTAINER}>
        <H1 overrides={HEADING}>{`Choose Your ${position}.`}</H1>
      </Block>
    );
  },
);
