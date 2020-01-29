// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { Avatar } from 'baseui/avatar';

// ANCHOR Styles
import { LOGO } from './styles';

export const ElectionSignInLogo = React.memo(() => (
  <Block overrides={LOGO}>
    <Avatar
      name="lpsci-ssg-election"
      size="100px"
      src="img/lpsci-logo.png"
    />
  </Block>
));
