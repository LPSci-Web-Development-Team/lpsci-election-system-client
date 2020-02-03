// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Utils
import { GradeLevel } from '@lpsci/utils/payloads/user';

// ANCHOR Hooks
import { useDebouncedState } from '@lpsci/utils/hooks/useDebouncedState';
import { useConstant } from '@lpsci/utils/hooks/useConstant';

export const SignUpFormInput = createModel(() => {
  const [lrn, setLrn] = useDebouncedState('', 150);
  const [password, setPassword] = useDebouncedState('', 150);
  const [confirmPassword, setConfirmPassword] = useDebouncedState('', 150);
  const [firstName, setFirstName] = useDebouncedState('', 150);
  const [lastName, setLastName] = useDebouncedState('', 150);
  const [gradeLevel, setGradeLevel] = React.useState<GradeLevel | undefined>();
  const [section, setSection] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  const handler = useConstant(() => ({
    lrn: (e: React.ChangeEvent<HTMLInputElement>) => {
      setLrn(e.target.value);
    },
    password: (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    confirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(e.target.value);
    },
    firstName: (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    },
    lastName: (e: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
    },
    gradeLevel: setGradeLevel,
    section: setSection,
  }));

  const [passwordMatch, passwordUnmatch] = React.useMemo(() => {
    const passwordFilled = password !== '';
    const confirmPasswordFilled = confirmPassword !== '';

    if (passwordFilled && confirmPasswordFilled) {
      const match = password === confirmPassword;

      return [
        passwordFilled && confirmPasswordFilled && match,
        passwordFilled && confirmPasswordFilled && !match,
      ];
    }
    return [false, false];
  }, [confirmPassword, password]);

  const filled = React.useMemo(() => (
    lrn !== '' && firstName !== '' && lastName !== '' && section !== '' && passwordMatch
  ), [lrn, firstName, lastName, section, passwordMatch]);

  return {
    handler,
    filled,
    passwordUnmatch,
    lrn,
    setLrn,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    gradeLevel,
    setGradeLevel,
    section,
    setSection,
    loading,
    setLoading,
    error,
    setError,
  };
});
