// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { ReviewCard } from 'components/review-card';
import { ReviewVoteHeading } from '../ReviewVoteHeading';

export const ReviewVote = React.memo(() => (
  <>
    <ReviewVoteHeading />
    <ReviewCard />
  </>
));
