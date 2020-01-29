// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { H1 } from 'baseui/typography';

// ANCHOR Styles
import { ELECTIONS, ELECTIONS_CONTAINER } from './styles';

export const ElectionSignInLogoText = React.memo(() => (
  <Block overrides={ELECTIONS_CONTAINER}>
    <H1 overrides={ELECTIONS}>LPSCI SSG ELECTIONS &apos;20-&apos;21</H1>
  </Block>
));
