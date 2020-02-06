// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Model
import { SignUpFormInput } from '@lpsci/scoped-models/sign-up/SignUpFormInput';

// ANCHOR Hooks
import { useConstant } from '@lpsci/utils/hooks/useConstant';

export const ElectionSignUpLrn = React.memo(() => {
  const BadgeIcon = useConstant(() => <FontAwesomeIcon icon={faIdBadge} />);

  const lrn = SignUpFormInput.useSelector((state) => state.handler.lrn);

  return (
    <FormControl label="Learner's Reference Number">
      <Input startEnhancer={BadgeIcon} onChange={lrn} placeholder="226503351137" required />
    </FormControl>
  );
});