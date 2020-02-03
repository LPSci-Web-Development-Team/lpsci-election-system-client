// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';

const SelectedClickableDiv = styled('div',
  {
    width: '100%',
    height: 'auto',
    marginTop: '10px',
    fontWeight: 800,
  });

const ClickableDiv = styled('div',
  {
    width: '100%',
    height: 'auto',
    marginTop: '10px',
    opacity: '0.4',
    fontWeight: 600,
  });


interface IProps {
  children: React.ReactNode;
  toggle: boolean;
}

export const ReviewCardOuter = ({ children, toggle }: IProps) => (
  <>
    {
        toggle ? (
          <SelectedClickableDiv>
            {children}
          </SelectedClickableDiv>
        ) : (
          <ClickableDiv>
            { children }
          </ClickableDiv>
        )
      }
  </>
);
