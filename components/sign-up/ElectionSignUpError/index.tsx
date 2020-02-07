// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { KIND, Notification } from 'baseui/notification';

// ANCHOR Model
import { SignUpFormInput } from 'scoped-models/sign-up/SignUpFormInput';

// ANCHOR Utils
import { When } from '../../utils/When';

// ANCHOR Styles
import { NOTIFICATION } from './styles';

export const ElectionSignUpError = React.memo(() => {
  const error = SignUpFormInput.useSelector((state: { error: any }) => state.error);

  return (
    <When condition={error}>
      <Notification kind={KIND.negative} overrides={NOTIFICATION}>
        {error}
      </Notification>
    </When>
  );
});
