// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { useStyletron } from 'baseui';

interface IProps {
  children: React.ReactNode;
}

export const ReviewCardInner = ({ children }: IProps) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
      })}
    >
      {children}
    </div>
  );
};
