// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { BLOCK } from './styles';

interface ICandidateCardContainerProps {
  children: React.ReactNode;
  toggled: boolean;
}

export const CandicateCardImageContainer = React.memo(
  ({ children }: ICandidateCardContainerProps) => (
    <Block overrides={BLOCK}>
      {children}
    </Block>
  ),
);
