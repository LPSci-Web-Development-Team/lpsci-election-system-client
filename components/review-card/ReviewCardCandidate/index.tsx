// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Grid, Cell, ALIGNMENT } from 'baseui/layout-grid';

// ANCHOR Components
import { ReviewCardOuter } from '../ReviewCardOuter';
import { ReviewCardInner } from '../ReviewCardInner';
import { ReviewCardImage } from '../ReviewCardImage';

interface IReviewCardRadioProps {
  candidate: any;
}

export const ReviewCardCandidate = React.memo(({ candidate }: IReviewCardRadioProps) => (
  <ReviewCardOuter>
    <Grid align={ALIGNMENT.center}>
      <Cell span={1}>
        <ReviewCardInner>
          {
              candidate.imgUrl && candidate.firstName
              && <ReviewCardImage src={candidate.imgUrl} alt={candidate.firstName} />
            }
        </ReviewCardInner>
      </Cell>
      <Cell span={3}>
        <ReviewCardInner>{`${candidate.firstName} ${candidate.lastName}`}</ReviewCardInner>
      </Cell>
    </Grid>
  </ReviewCardOuter>
));
