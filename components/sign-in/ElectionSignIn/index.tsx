// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Router from 'next/router';

// ANCHOR js-cookie
import cookies from 'js-cookie';

// ANCHOR Models
import { SignInFormInput } from 'scoped-models/sign-in/SignInFormInput';

// ANCHOR Utils
import { signinUser, checkIfVoted, voterIdentifySection } from 'utils/api/voter';

// ANCHOR Hooks
import { usePromise } from 'utils/hooks/usePromise';

// ANCHOR Components
import { ElectionSignInLogo } from '../ElectionSignInLogo';
import { ElectionSignInLogoText } from '../ElectionSignInLogoText';
import { ElectionSignInHeading } from '../ElectionSignInHeading';
import { ElectionSignInLogoContainer } from '../ElectionSignInLogoContainer';
import { ElectionSignInInputContainer } from '../ElectionSignInInputContainer';
import { ElectionSignInInputLRN } from '../ElectionSignInLrn';
import { ElectionSignInInputPassword } from '../ElectionSignInPassword';
import { ElectionSignInSubmitButton } from '../ElectionSignInSubmitButton';
import { ElectionSignInError } from '../ElectionSignInError';

export const ElectionSignIn = React.memo(() => {
  const [
    lrn,
    password,
    filled,
    setLoading,
    setError,
    validLrn,
    setDisabled,
  ] = SignInFormInput.useSelectors((state) => [
    state.lrn,
    state.password,
    state.filled,
    state.setLoading,
    state.setError,
    state.validLrn,
    state.setDisabled,
  ]);

  const mounted = usePromise([
    lrn, password, filled,
  ]);

  const onSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setDisabled(true);

    if (filled && validLrn) {
      try {
        await mounted(signinUser({
          username: lrn,
          password,
        })).then((res) => {
          cookies.set('access_token', res.data.id);
          cookies.set('voterId', res.data.userId);
          setLoading(false);
          checkIfVoted(res.data.userId)
            .then((resVote) => {
              if (resVote.data.length > 0) {
                setError('It seems like you\'ve already voted.');
              } else {
                const voterId = cookies.get('voterId') ?? '';
                voterIdentifySection(voterId).then((section) => {
                  cookies.set('gradeLevel', section.data.gradeLevel);
                });
                Router.push('/voting');
              }
            });
        });
      } catch (err) {
        setError('Uh-oh, it seems like you\'ve inputted wrong LRN or password. Please try again.');
        setLoading(false);
        setDisabled(false);
        Router.push('/');
      }
    }
  }, [setLoading, filled, validLrn, mounted, lrn, password, setError, setDisabled]);

  React.useEffect(() => {
    const { pathname } = Router;
    const isLoggedIn = cookies.get('access_token') !== undefined;
    if (isLoggedIn && pathname === '/') {
      Router.push('/voting');
      console.log(pathname);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <ElectionSignInLogoContainer>
        <ElectionSignInLogo name="lpsci-logo" size="100px" src="img/lpsci-logo.png" />
        <ElectionSignInLogoText />
      </ElectionSignInLogoContainer>
      <ElectionSignInHeading />
      <ElectionSignInError />
      <ElectionSignInInputContainer>
        <ElectionSignInInputLRN />
      </ElectionSignInInputContainer>
      <ElectionSignInInputContainer>
        <ElectionSignInInputPassword />
      </ElectionSignInInputContainer>
      <ElectionSignInSubmitButton />
    </form>
  );
});
