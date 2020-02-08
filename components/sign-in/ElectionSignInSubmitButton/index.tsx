// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { SignUpFormInput } from '@lpsci/scoped-models/sign-up/SignUpFormInput';

// ANCHOR Styles
import { SUBMIT_BUTTON } from './styles';

export const ElectionSignInSubmitButton = React.memo(() => {
  const [disable] = SignUpFormInput.useSelectors((state) => [
    state.disabled,
  ]);

  return (
    <Button
      type="submit"
      overrides={SUBMIT_BUTTON}
      disabled={disable}
    >
    Sign In
    </Button>
  );
});
