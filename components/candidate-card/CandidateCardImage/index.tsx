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
  opacity: '0.3',
});

const SelectedCandidateImage = styled('img', {
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
  toggle: boolean;
  selected: boolean;
}

export const CandicateCardImage = React.memo(
  ({
    src, alt, toggle, selected,
  }: ICandidateCardImageProps) => (
    <>
      {
    // eslint-disable-next-line no-nested-ternary
    !selected ? <SelectedCandidateImage src={src} alt={alt} />
      : toggle ? <SelectedCandidateImage src={src} alt={alt} />
        : <CandidateImage src={src} alt={alt} />
    }
    </>
  ),
);
