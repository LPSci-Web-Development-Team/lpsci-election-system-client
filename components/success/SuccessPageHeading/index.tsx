// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { H1 } from 'baseui/typography';

// ANCHOR Styles
import { HEADING } from './styles';

interface ISuccessPageHeadingProps {
  action: string;
}

export const SuccessPageHeading = React.memo(({ action }: ISuccessPageHeadingProps) => (
  <H1 overrides={HEADING}>
    {`${action} successfully!`}
  </H1>
))