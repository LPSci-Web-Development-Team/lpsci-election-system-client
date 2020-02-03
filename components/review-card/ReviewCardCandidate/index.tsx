// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Grid, Cell, ALIGNMENT } from 'baseui/layout-grid';

// ANCHOR UI Models
import { IVoteList } from 'models/interface/Vote';

// ANCHOR Scoped Models
import { VotingTab } from 'models/scoped-models/voting/VotingTab';

// ANCHOR Components
import { ReviewCardOuter } from '../ReviewCardOuter';
import { ReviewCardInner } from '../ReviewCardInner';
import { ReviewCardImage } from '../ReviewCardImage';

interface IReviewCardRadioProps {
  candidate: IVoteList;
}

export const ReviewCardCandidate = React.memo(({ candidate }: IReviewCardRadioProps) => {
  // ANCHOR Voting Tab
  const [voteList] = VotingTab.useSelector((state) => [state.voteList]);
  const [selected, setSelected] = React.useState<boolean>(false);

  // ANCHOR Get votelist to identify which is voted
  React.useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    voteList && voteList.forEach((item) => (
      item.candidateId === candidate.candidateId && setSelected(true)
    ));
  });

  return (
    <ReviewCardOuter toggle={selected}>
      <Grid align={ALIGNMENT.center}>
        <Cell span={1}>
          <ReviewCardInner>
            {
              candidate.imageURL && candidate.firstName
              && <ReviewCardImage src={candidate.imageURL} alt={candidate.firstName} />
            }
          </ReviewCardInner>
        </Cell>
        <Cell span={3}>
          <ReviewCardInner>{`${candidate.firstName} ${candidate.lastName}`}</ReviewCardInner>
        </Cell>
      </Grid>
    </ReviewCardOuter>
  );
});
