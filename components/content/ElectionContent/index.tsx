import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

import { BLOCK, MOBILE_COLUMN } from './styles';


interface IProps {
  children: React.ReactNode;
}

export const ElectionContent = ({ children }: IProps) => (
  <Block gridColumn={MOBILE_COLUMN} overrides={BLOCK}>
    {children}
  </Block>
);
