// ANCHOR React
import * as React from 'react';

// ANCHOR Base
// import { KIND, Notification } from 'baseui/notification';
import { Paragraph1 } from 'baseui/typography';

// ANCHOR Model
import { SignInFormInput } from 'scoped-models/sign-in/SignInFormInput';

// ANCHOR Utils
import { When } from '../../utils/When';

// ANCHOR Styles
// import { NOTIFICATION } from './styles';

export const ElectionSignInError = React.memo(() => {
  const error = SignInFormInput.useSelector((state: { error: any }) => state.error);

  return (
    <When condition={error}>
      <Paragraph1>
        {error}
      </Paragraph1>
    </When>
  );
});
