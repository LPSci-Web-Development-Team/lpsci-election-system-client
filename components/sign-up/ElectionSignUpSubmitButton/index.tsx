// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button, SHAPE } from 'baseui/button';

// ANCHOR Styles
import { SUBMIT_BUTTON } from './styles';

export const ElectionSignUpSubmitButton = React.memo(() => (
  <Button
    shape={SHAPE.pill}
    type="submit"
    overrides={SUBMIT_BUTTON}
  >
    Sign Up
  </Button>
));
