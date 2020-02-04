// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';

const Div = styled('div',
  {
    width: '100%',
    height: 'auto',
    marginTop: '10px',
    fontWeight: 700,
  });

interface IProps {
  children: React.ReactNode;
}

export const ReviewCardOuter = ({ children }: IProps) => (
  <Div>
    { children }
  </Div>
);
