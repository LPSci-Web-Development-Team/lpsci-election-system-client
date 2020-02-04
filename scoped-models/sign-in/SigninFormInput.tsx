// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useDebouncedState } from 'utils/hooks/useDebouncedState';

export const SignInFormInput = createModel(() => {
  const [lrn, setLrn] = useDebouncedState('', 150);
  const [password, setPassword] = useDebouncedState('', 150);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  return {
    lrn,
    setLrn,
    password,
    setPassword,
    loading,
    setLoading,
    error,
    setError,
  };
});
