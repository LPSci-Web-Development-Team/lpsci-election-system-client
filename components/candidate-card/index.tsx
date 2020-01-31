// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { CandicateCardImageContainer } from './CandidateCardImageContainer';
import { CandicateCardImage } from './CandidateCardImage';
import { CandidateCardName } from './CandidateCardName';
import { CandidateCardParty } from './CandidateCardParty';

interface IProps {
  src: string;
  alt: string;
  candidateName: string;
  candidateParty: string;
  colorHex: string;
}
export const CandicateCard = React.memo(({ src, alt, candidateName, candidateParty, colorHex }: IProps) => (
  <CandicateCardImageContainer>
    <CandicateCardImage src={src} alt={alt} />
    <CandidateCardName value={candidateName} />
    <CandidateCardParty value={candidateParty} colorHex={colorHex} />
  </CandicateCardImageContainer>
));
