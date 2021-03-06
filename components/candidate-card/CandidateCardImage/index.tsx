// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';

// ANCHOR Styled Components
const CandidateImage = styled('img', {
  width: '100%',
  height: '100%',
  backgroundPositionX: 'center',
  backgroundPositionY: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
  objectFit: 'cover',
});

interface ICandidateCardImageProps {
  src: string;
  alt: string;
}

export const CandicateCardImage = React.memo(({ src, alt }: ICandidateCardImageProps) => (
  <CandidateImage src={src} alt={alt} />
));
