// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { SignUpFormInput } from '@lpsci/scoped-models/sign-up/SignUpFormInput';

// ANCHOR Utils
import { signupUser } from '@lpsci/utils/api/voter';

// ANCHOR Hooks
import { usePromise } from '@lpsci/utils/hooks/usePromise';

// ANCHOR Components
import { ElectionSignUpLogo } from '../ElectionSignUpLogo';
import { ElectionSignUpLogoText } from '../ElectionSignUpLogoText';
import { ElectionSignUpHeading } from '../ElectionSignUpHeading';
import { ElectionSignUpLogoContainer } from '../ElectionSignUpLogoContainer';
import { ElectionSignUpSubmitButton } from '../ElectionSignUpSubmitButton';
import { ElectionSignUpLrn } from '../ElectionSignUpLrn';
import { ElectionSignUpFirstName } from '../ElectionSignUpFirstName';
import { ElectionSignUpLastName } from '../ElectionSignUpLastName';
import { ElectionSignUpPassword } from '../ElectionSignUpPassword';
import { ElectionSignUpConfirmPassword } from '../ElectionSignUpConfirmPassword';


export const ElectionSignUp = React.memo(() => {
  const [
    lrn, password, confirmPassword, firstName, lastName, gradeLevel, section, filled, setLoading,
  ] = SignUpFormInput.useSelectors((state) => [
    state.lrn,
    state.password,
    state.confirmPassword,
    state.firstName,
    state.lastName,
    state.gradeLevel,
    state.section,
    state.filled,
    state.setLoading,
  ]);

  const mounted = usePromise([
    lrn, password, confirmPassword, firstName, lastName, gradeLevel, section, filled,
  ]);

  const onSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    if (filled) {
      try {
        await mounted(signupUser({
          lrn,
          password,
          firstName,
          lastName,
          gradeLevel,
          section,
        }));

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
  }, [setLoading, filled, mounted, lrn, password, firstName, lastName, gradeLevel, section]);

  return (
    <form onSubmit={onSubmit}>
      <ElectionSignUpLogoContainer>
        <ElectionSignUpLogo
          name="lpsci-logo"
          size="100px"
          src="img/lpsci-logo.png"
        />
        <ElectionSignUpLogoText />
      </ElectionSignUpLogoContainer>
      <ElectionSignUpHeading />
      <ElectionSignUpLrn />
      <ElectionSignUpFirstName />
      <ElectionSignUpLastName />
      <ElectionSignUpPassword />
      <ElectionSignUpConfirmPassword />
      <ElectionSignUpSubmitButton />
    </form>
  );
});
