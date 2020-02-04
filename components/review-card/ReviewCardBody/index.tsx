// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { StyledBody } from 'baseui/card';
import { Button, SIZE } from 'baseui/button';

// ANCHOR Model
import { IPosition } from 'models/interface/Vote';
import { VOTE } from 'models/ui-models/vote';

// ANCHOR Components
import { ReviewCardRadio } from '../ReviewCardRadio';

interface IReviewCardBodyProps {
  position: IPosition;
}

export const ReviewCardBody = React.memo(({ position }: IReviewCardBodyProps) => (
  <StyledBody>
    <ReviewCardRadio position={position}/>
  </StyledBody>
));
