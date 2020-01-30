// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { H1 } from 'baseui/typography';

// ANCHOR Utils
import getYear from 'date-fns/getYear';

// ANCHOR Styles
import { ELECTIONS, ELECTIONS_CONTAINER } from './styles';

const currentYear = getYear(new Date());

export const ElectionSignUpLogoText = React.memo(() => (
  <Block overrides={ELECTIONS_CONTAINER}>
    <H1 overrides={ELECTIONS}>
      LPSCI SSG ELECTIONS
      {' '}
      {currentYear}
      &nbsp;-&nbsp;
      {currentYear + 1}
    </H1>
  </Block>
));
