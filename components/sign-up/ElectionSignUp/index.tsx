// ANCHOR React
import * as React from 'react';

// ANCHOR Hooks
import { useConstant } from 'utils/hooks/useConstant';

// ANCHOR Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faUser } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Components
import { GRADE_AND_SECTION } from 'models/ui-models/sign-up';
import { ElectionSignUpLogo } from '../ElectionSignUpLogo';
import { ElectionSignUpLogoText } from '../ElectionSignUpLogoText';
import { ElectionSignUpHeading } from '../ElectionSignUpHeading';
import { ElectionSignUpLogoContainer } from '../ElectionSignUpLogoContainer';
import { ElectionSignUpInputText } from '../ElectionSignUpInputText';
import { ElectionSignUpInputPassword } from '../ElectionSignUpInputPassword';
import { ElectionSignUpSubmitButton } from '../ElectionSignUpSubmitButton';
import { ElectionSignUpSelect } from '../ElectionSignUpSelect';

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
      <ElectionSignUpInputText
        label="Learner's Reference Number"
        placeholder="226503351137"
        name="lrn"
        Icon={BadgeIcon}
      />
      <ElectionSignUpInputText
        label="First Name"
        placeholder="Juan"
        name="firstName"
        Icon={UserIcon}
      />
      <ElectionSignUpInputText
        label="Last Name"
        placeholder="Dela Cruz"
        name="lastName"
        Icon={UserIcon}
      />
      <ElectionSignUpSelect sectionValue={GRADE_AND_SECTION} label="Grade Level" />
      <ElectionSignUpSelect sectionValue={GRADE_AND_SECTION} label="Section" />
      <ElectionSignUpInputPassword
        label="Password"
        name="password"
      />
      <ElectionSignUpInputPassword
        label="Confirm Password"
        name="confirmPassword"
      />
      <ElectionSignUpSubmitButton />
    </>
  );
});
