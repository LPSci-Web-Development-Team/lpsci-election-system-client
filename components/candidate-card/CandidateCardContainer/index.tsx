// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR  Styles
import { BLOCK } from './styles';

interface ICandidateContainerProps {
  children: React.ReactNode;
}

export const CandidateCardContainer = React.memo(({ children }: ICandidateContainerProps) => (
  <Block overrides={BLOCK}>
    {children}
  </Block>
));
