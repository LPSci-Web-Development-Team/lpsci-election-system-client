// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';

const ClickableDiv = styled('div',
  {
    width: '100%',
    height: 'auto',
    marginTop: '10px',
  });

interface IProps {
  children: React.ReactNode;
}

export const ReviewCardOuter = ({ children }: IProps) => {
  return (
    <ClickableDiv>
      {children}
    </ClickableDiv>
  );
};
