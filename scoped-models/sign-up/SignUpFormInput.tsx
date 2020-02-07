// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Interface
import { Option } from 'baseui/select';

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
  const [error, setError] = React.useState<string | null>(null);
  const [sectionsSelect, setSectionsSelect] = React.useState<Option[]>([]);
  const [validLrn, setValidLrn] = React.useState<boolean>(false);
  const [visitedLrn, setVisitedLrn] = React.useState<boolean>(false);
  const [disabled, setDisabled] = React.useState<boolean>(false);

  const handler = useConstant(() => ({
    lrnPress: (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Only ASCII charactar in that range allowed
      const ASCIICode = (e.which) ? e.which : e.keyCode;
      if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        e.preventDefault();
      }
    },
    lrn: (e: React.ChangeEvent<HTMLInputElement>) => {
      setLrn(e.target.value);
      if (e.target.value.length !== 12) {
        setValidLrn(false);
        setVisitedLrn(true);
      } else {
        setValidLrn(true);
        setVisitedLrn(true);
      }
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
    lrn !== ''
    && firstName !== ''
    && lastName !== ''
    && section !== ''
    && section !== null
    && passwordMatch
  ), [lrn, firstName, lastName, section, passwordMatch]);

  return {
    handler,
    filled,
    passwordMatch,
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
    sectionsSelect,
    setSectionsSelect,
    validLrn,
    visitedLrn,
    disabled,
    setDisabled,
  };
});
