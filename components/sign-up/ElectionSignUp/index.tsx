// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Router from 'next/router';

// ANCHOR Models
import { SignUpFormInput } from 'scoped-models/sign-up/SignUpFormInput';

// ANCHOR Utils
import { signupUser } from 'utils/api/voter';

// ANCHOR Hooks
import { usePromise } from 'utils/hooks/usePromise';

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
import { ElectionSignUpGradeLevel } from '../ElectionSignUpGradeLevel';
import { ElectionSignUpSection } from '../ElectionSignUpSection';
import { ElectionSignUpError } from '../ElectionSignUpError';

export const ElectionSignUp = React.memo(() => {
  const [
    lrn,
    password,
    confirmPassword,
    firstName,
    lastName,
    gradeLevel,
    section,
    filled,
    setLoading,
    setError,
    validLrn,
    setDisabled,
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
    state.setError,
    state.validLrn,
    state.setDisabled,
  ]);

  const mounted = usePromise([
    lrn, password, confirmPassword, firstName, lastName, gradeLevel, section, filled,
  ]);

  const onSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setDisabled(true);

    if (filled && validLrn) {
      try {
        await mounted(signupUser({
          lrn,
          password,
          firstName,
          lastName,
          gradeLevel,
          sectionId: section,
          isAdmin: false,
        }));
        setLoading(false);
        Router.push('/register-success');
      } catch (err) {
        setError(err);
        setLoading(false);
        setDisabled(false);
        Router.push('/');
      }
    }
  }, [
    setLoading,
    filled,
    validLrn,
    mounted,
    lrn,
    password,
    firstName,
    lastName,
    gradeLevel,
    section,
    setError,
    setDisabled,
  ]);

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
      <ElectionSignUpError />
      <ElectionSignUpLrn />
      <ElectionSignUpFirstName />
      <ElectionSignUpLastName />
      <ElectionSignUpGradeLevel />
      <ElectionSignUpSection />
      <ElectionSignUpPassword />
      <ElectionSignUpConfirmPassword />
      <ElectionSignUpSubmitButton />
    </form>
  );
});
