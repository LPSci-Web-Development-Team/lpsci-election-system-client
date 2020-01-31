// ANCHOR React
import * as React from 'react';

// ANCHOR react-use
import { useToggle } from 'react-use';

// ANCHOR Base
import { styled } from 'baseui';

// ANCHOR Components
import { CandicateCardImageContainer } from './CandidateCardImageContainer';
import { CandicateCardImage } from './CandidateCardImage';
import { CandidateCardName } from './CandidateCardName';
import { CandidateCardParty } from './CandidateCardParty';
import { CandidateToggleIdentifier } from './CandidateToggleIdentifier';
import { CandidateCardContainer } from './CandidateCardContainer';

interface IProps {
  src: string;
  alt: string;
  candidateName: string;
  candidateParty: string;
  colorHex: string;
}

const ClickableDiv = styled('div',
  {
    width: '100%',
    height: '100%',
  });

export const CandicateCard = React.memo(({
  src, alt, candidateName, candidateParty, colorHex,
}: IProps) => {
  const [on, toggle] = useToggle(false);

  return (
    <CandidateCardContainer>
      <ClickableDiv onClick={toggle}>
        <CandicateCardImageContainer toggled={on}>
          <CandicateCardImage src={src} alt={alt} />
          {on && <CandidateToggleIdentifier />}
          <CandidateCardName value={candidateName} />
          <CandidateCardParty value={candidateParty} colorHex={colorHex} />
        </CandicateCardImageContainer>
      </ClickableDiv>
    </CandidateCardContainer>
  );
});
