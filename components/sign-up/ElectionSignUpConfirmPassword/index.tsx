// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Model
import { SignUpFormInput } from '@lpsci/scoped-models/sign-up/SignUpFormInput';

// ANCHOR Hooks
import { useConstant } from '@lpsci/utils/hooks/useConstant';

export const ElectionSignUpConfirmPassword = React.memo(() => {
  const LockIcon = useConstant(() => <FontAwesomeIcon icon={faLock} />);

  const confirmPassword = SignUpFormInput.useSelector((state) => state.handler.confirmPassword);

  return (
    <FormControl label="Retype Password">
      <Input startEnhancer={LockIcon} onChange={confirmPassword} type="password" placeholder="*******" required />
    </FormControl>
  );
});
