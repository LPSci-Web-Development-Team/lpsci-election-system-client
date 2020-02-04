// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { H1 } from 'baseui/typography';

// ANCHOR UI Models
import { IPosition } from 'models/interface/Vote';

interface ICandidateContainerProps {
  position: IPosition;
  color: string;
}

export const ReviewCardHeading = React.memo(
  ({ position, color }: ICandidateContainerProps) => (
    <H1 overrides={{
      Block: {
        style: {
          fontSize: '18px',
          fontWeight: 600,
          borderLeft: `8px ${color} solid`,
          marginLeft: '-20px',
          marginRight: '-20px',
          marginTop: '-18px',
          paddingLeft: '20px',
          paddingTop: '5px',
          paddingBottom: '5px',
          backgroundColor: '#f7f7f7',
        },
      },
    }}
    >
      {`${position.toUpperCase().split('.')[0]}`}
    </H1>
  ),
);
