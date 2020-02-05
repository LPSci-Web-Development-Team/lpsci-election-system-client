// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { H1 } from 'baseui/typography';

// ANCHOR Styles
import { HEADING } from './styles';

interface ISuccessPageHeadingProps {
  text: string;
}

export const SuccessPageHeading = React.memo(({ text }: ISuccessPageHeadingProps) => (
  <H1 overrides={HEADING}>
    {text}
  </H1>
));
