// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { ElectionSignInLogo } from '../ElectionSignInLogo';
import { ElectionSignInLogoText } from '../ElectionSignInLogoText';
import { ElectionSignInHeading } from '../ElectionSignInHeading';
import { ElectionSignInLogoContainer } from '../ElectionSignInLogoContainer';
import { ElectionSignInInputContainer } from '../ElectionSignInInputContainer';
import { ElectionSignInInputLRN } from '../ElectionSignInInputLRN';
import { ElectionSignInInputPassword } from '../ElectionSignInInputPassword';
import { ElectionSignInSubmitButton } from '../ElectionSignInSubmitButton';

export const ElectionSignIn = React.memo(() => (
  <>
    <ElectionSignInLogoContainer>
      <ElectionSignInLogo name="lpsci-logo" size="100px" src="img/lpsci-logo.png" />
      <ElectionSignInLogoText />
    </ElectionSignInLogoContainer>
    <ElectionSignInHeading />
    <ElectionSignInInputContainer>
      <ElectionSignInInputLRN />
    </ElectionSignInInputContainer>
    <ElectionSignInInputContainer>
      <ElectionSignInInputPassword />
    </ElectionSignInInputContainer>
    <ElectionSignInSubmitButton />
  </>
));
