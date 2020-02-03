// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Model
import { SignUpFormInput } from '@lpsci/scoped-models/sign-up/SignUpFormInput';

// ANCHOR Hooks
import { useConstant } from '@lpsci/utils/hooks/useConstant';

export const ElectionSignUpFirstName = React.memo(() => {
  const UserIcon = useConstant(() => <FontAwesomeIcon icon={faUser} />);

  const firstName = SignUpFormInput.useSelector((state) => state.handler.firstName);

  return (
    <FormControl label="First Name">
      <Input startEnhancer={UserIcon} onChange={firstName} placeholder="Juan" required />
    </FormControl>
  );
});
