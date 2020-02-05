// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { SELECTED_BLOCK, BLOCK } from './styles';

interface ICandidateCardContainerProps {
  children: React.ReactNode;
  toggle: boolean;
  selected: boolean;
}

export const CandicateCardImageContainer = React.memo(
  ({ children, selected, toggle }: ICandidateCardContainerProps) => (
    <Block overrides={
      // eslint-disable-next-line no-nested-ternary
      !selected ? SELECTED_BLOCK
        : toggle ? SELECTED_BLOCK
          : BLOCK
    }
    >
      {children}
    </Block>
  ),
);
