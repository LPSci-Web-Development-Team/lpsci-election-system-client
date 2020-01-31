// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { H1 } from 'baseui/typography';

// ANCHOR Styles
import { HEADING, HEADING_CONTAINER } from './styles';

export const ElectionSignUpHeading = React.memo(() => (
  <Block overrides={HEADING_CONTAINER}>
    <H1 overrides={HEADING}>Create Account</H1>
  </Block>
));
