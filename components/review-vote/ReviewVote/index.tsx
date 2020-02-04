// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { ReviewCard } from '@lpsci/components/review-card/ReviewCard';
import { ReviewModal } from '@lpsci/components/review-modal/ReviewModal';
import { ReviewVoteHeading } from '../ReviewVoteHeading';
import { ReviewVoteButton } from '../ReviewVoteButton';

export const ReviewVote = React.memo(() => (
  <>
    <ReviewVoteHeading />
    <ReviewCard />
    <ReviewVoteButton />
    <ReviewModal />
  </>
));
