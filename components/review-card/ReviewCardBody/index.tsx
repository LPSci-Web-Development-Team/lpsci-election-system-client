// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { StyledBody } from 'baseui/card';

// ANCHOR Model
import { IPosition } from 'models/interface/Vote';

// ANCHOR Components
import { ReviewCardRadio } from '../ReviewCardRadio';

interface IReviewCardBodyProps {
  position: IPosition;
}

export const ReviewCardBody = React.memo(({ position }: IReviewCardBodyProps) => (
  <StyledBody>
    <ReviewCardRadio position={position} />
  </StyledBody>
));
