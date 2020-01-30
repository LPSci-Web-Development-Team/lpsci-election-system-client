// ANCHOR React
import * as React from 'react';

// ANCHOR Hooks
import { useConstant } from '@lpsci/utils/hooks/useConstant';

// ANCHOR Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faUser } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Components
import { ElectionSignUpLogo } from '../ElectionSignUpLogo';
import { ElectionSignUpLogoText } from '../ElectionSignUpLogoText';
import { ElectionSignUpHeading } from '../ElectionSignUpHeading';
import { ElectionSignUpLogoContainer } from '../ElectionSignUpLogoContainer';
import { ElectionSignUpInputContainer } from '../ElectionSignUpInputContainer';
import { ElectionSignUpInputText } from '../ElectionSignUpInputText';
import { ElectionSignUpInputPassword } from '../ElectionSignUpInputPassword';
import { ElectionSignUpSubmitButton } from '../ElectionSignUpSubmitButton';

export const ElectionSignUp = React.memo(() => {
  const BadgeIcon = useConstant(() => <FontAwesomeIcon icon={faIdBadge} />);
  const UserIcon = useConstant(() => <FontAwesomeIcon icon={faUser} />);

  return (
    <>
      <ElectionSignUpLogoContainer>
        <ElectionSignUpLogo
          name="lpsci-logo"
          size="100px"
          src="img/lpsci-logo.png"
        />
        <ElectionSignUpLogoText />
      </ElectionSignUpLogoContainer>
      <ElectionSignUpHeading />
      <ElectionSignUpInputContainer>
        <ElectionSignUpInputText
          label="Learner's Reference Number"
          placeholder="226503351137"
          name="lrn"
          startEnhancer={BadgeIcon}
        />
      </ElectionSignUpInputContainer>
      <ElectionSignUpInputContainer>
        <ElectionSignUpInputText
          label="First Name"
          placeholder="Juan"
          name="firstName"
          startEnhancer={UserIcon}
        />
      </ElectionSignUpInputContainer>
      <ElectionSignUpInputContainer>
        <ElectionSignUpInputText
          label="Last Name"
          placeholder="Dela Cruz"
          name="lastName"
          startEnhancer={UserIcon}
        />
      </ElectionSignUpInputContainer>
      <ElectionSignUpInputContainer>
        <ElectionSignUpInputPassword
          label="Password"
          name="password"
        />
      </ElectionSignUpInputContainer>
      <ElectionSignUpInputContainer>
        <ElectionSignUpInputPassword
          label="Confirm Password"
          name="confirmPassword"
        />
      </ElectionSignUpInputContainer>
      <ElectionSignUpSubmitButton />
    </>
  );
});
