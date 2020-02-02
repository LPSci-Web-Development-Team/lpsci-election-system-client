// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { H1 } from 'baseui/typography';

// ANCHOR Utils
import { isNullOrUndefined } from 'util';

// ANCHOR UI Models
import { IPosition, IVoteList } from 'models/interface/Vote';
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
    const [vote, setVote, activeTabNum] = VotingTab.useSelectors((state) => [
      state.vote, state.setVote, state.activeTabNum,
    ]);

    // ANCHOR Vote List
    const [voteList, setVoteList] = React.useState<IVoteList[]>();

    // ANCHOR Active Tab
    const [stored, setStored] = React.useState<number>(0);

    React.useEffect(() => {
      // ANCHOR Check if votelist is defined
      if (isNullOrUndefined(localStorage.getItem('voteList'))) {
        localStorage.setItem('voteList', JSON.stringify([{
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
    // ANCHOR Initiate vote list and active tab
      setVoteList(JSON.parse(localStorage.getItem('voteList') ?? '[{dsa}]'));
      setStored(parseInt(localStorage.getItem('activeTab') ?? '0', 0));
    }, [activeTabNum]);

    React.useEffect(() => {
      if (vote.index === positionIndex) {
        // ANCHOR Check if vote list for active vote
        // eslint-disable-next-line no-unused-expressions
        voteList?.forEach((item: IVoteList) => {
          if (item.index === stored) {
            setVote({
              index: item.index,
              candidateId: item.candidateId,
              firstName: item.firstName,
              lastName: item.lastName,
              party: item.party,
              position: item.position,
              imageURL: item.imageURL,
            });
          }
        });
      } else {
        // ANCHOR Set Active Vote to Abstain
        setVote({
          index: positionIndex,
          position,
        });
      }
    }, [voteList]);

    return (
      <Block overrides={HEADING_CONTAINER}>
        <H1 overrides={HEADING}>{`Choose Your ${position}.`}</H1>
      </Block>
    );
  },
);
