// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';

interface IProps {
  children: React.ReactNode;
}

const DivInner = styled('div',
  {
    display: 'flex',
  });

export const ReviewCardInner = ({ children }: IProps) => (
  <DivInner>
    {children}
  </DivInner>
);
