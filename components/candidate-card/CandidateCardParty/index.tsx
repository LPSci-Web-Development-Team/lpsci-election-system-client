// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';

interface IProps {
  value: string;
  colorHex: string;
}

export const CandidateCardParty = React.memo(({ value, colorHex }: IProps) => {
  const H1 = styled('text', {
    color: colorHex,
    fontWeight: 700,
    fontSize: '12px',
  });

  return (
    <H1>
      {`${value.toUpperCase()} Party`}
    </H1>
  );
});
