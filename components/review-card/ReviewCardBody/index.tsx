// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { StyledBody } from 'baseui/card';
import { Button, SIZE } from 'baseui/button';

// ANCHOR Model
import { IPosition } from 'models/interface/Vote';

// ANCHOR Components
import { VOTE } from 'models/ui-models/vote';
import { ReviewCardCandidate } from '../ReviewCardCandidate';

// ANCHOR Styles
import { BUTTON } from './styles';

interface IReviewCardBodyProps {
  position: IPosition;
}

export const ReviewCardBody = React.memo(({ position }: IReviewCardBodyProps) => (
  <StyledBody>
    {
      VOTE.map((candidate) => (
        candidate.position === position
          && <ReviewCardCandidate candidate={candidate} />
      ))
    }
    <Button
      size={SIZE.compact}
      overrides={BUTTON}
    >
      Abstain
    </Button>
  </StyledBody>
));
