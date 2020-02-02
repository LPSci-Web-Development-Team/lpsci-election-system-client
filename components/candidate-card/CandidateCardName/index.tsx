// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { H1 } from 'baseui/typography';

// ANCHOR Styles
import { CANDIDATE_NAME } from './styles'

interface IProps {
  value: string;
}

export const CandidateCardName = React.memo(({ value }: IProps) => (
  <H1 overrides={CANDIDATE_NAME}>
    {value}
  </H1>
))