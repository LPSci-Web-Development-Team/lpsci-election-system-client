// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';

// ANCHOR Styled Components
const SuccessIllustration = styled('img', {
  width: '100%',
  height: 'auto',
  backgroundPositionX: 'center',
  backgroundPositionY: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
  objectFit: 'cover',
});

interface ISuccessPageIllustrationProps {
  src: string;
  alt: string;
}

export const SuccessPageIllustration = React.memo(
  ({ src, alt }: ISuccessPageIllustrationProps) => (
    <SuccessIllustration src={src} alt={alt} />
  ),
);
