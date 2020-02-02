// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { H1 } from 'baseui/typography';

// ANCHOR Utils
import { isNullOrUndefined } from 'util';

// ANCHOR UI Models
import { IPosition } from 'models/interface/Vote';
import { VotingTab } from 'models/scoped-models/voting/VotingTab';

// ANCHOR Styles
import { HEADING, HEADING_CONTAINER } from './styles';

interface IElectionVotingTabHeadingProps {
  position: IPosition;
  positionIndex: number;
}

export const ElectionVotingTabHeading = React.memo(
  ({ position, positionIndex }: IElectionVotingTabHeadingProps) => {
    // ANCHOR Voting Tab Models
    const [vote, setVote, voteList] = VotingTab.useSelectors((state) => [
      state.vote, state.setVote, state.voteList,
    ]);
    React.useEffect(() => {
      // ANCHOR Check if votelist is defined
      if (isNullOrUndefined(localStorage.getItem('voteList'))) {
        localStorage.setItem('voteList', JSON.stringify([{
          index: 0,
          position: IPosition.President,
          candidateId: undefined,
          firstName: undefined,
          lastName: undefined,
          party: undefined,
          imageURL: undefined,
        }]));
      }
    }, []);

    React.useEffect(() => {
      if (isNullOrUndefined(vote.position)) {
        // ANCHOR Set Active Vote to Abstain
        setVote({
          index: positionIndex,
          position,
        });
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position, positionIndex, setVote, voteList]);
    return (
      <Block overrides={HEADING_CONTAINER}>
        <H1 overrides={HEADING}>{`Choose Your ${position}.`}</H1>
      </Block>
    );
  },
);
