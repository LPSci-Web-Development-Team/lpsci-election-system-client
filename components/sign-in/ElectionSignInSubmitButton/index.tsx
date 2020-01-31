// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Styles
import { SUBMIT_BUTTON } from './styles';

export const ElectionSignInSubmitButton = React.memo(() => (
  <Button
    type="submit"
    overrides={SUBMIT_BUTTON}
  >
    Sign In
  </Button>
));
