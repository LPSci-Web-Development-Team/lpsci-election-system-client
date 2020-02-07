// ANCHOR React
import * as React from 'react';

// ANCHOR Hooks
import { useConstant } from 'utils/hooks/useConstant';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Scoped Models
import { SignUpFormInput } from '@lpsci/scoped-models/sign-up/SignUpFormInput';

export const ElectionSignInInputPassword = React.memo(() => {
  const LockIcon = useConstant(() => <FontAwesomeIcon icon={faLock} />);

  const password = SignUpFormInput.useSelector((state) => state.handler.password);

  return (
    <FormControl label="Password">
      <Input
        startEnhancer={LockIcon}
        onChange={password}
        type="password"
        placeholder="*******"
        required
      />
    </FormControl>
  );
});
