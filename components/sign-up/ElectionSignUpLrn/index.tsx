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
import { useConstantCallback } from '@lpsci/utils/hooks/useConstantCallback';

export const ElectionSignUpLrn = React.memo(() => {
  const BadgeIcon = useConstant(() => <FontAwesomeIcon icon={faIdBadge} />);

  const [lrnHandler, validLrn, visitedLrn] = SignUpFormInput.useSelectors((state) => [
    state.handler.lrn,
    state.validLrn,
    state.visitedLrn,
  ]);

  const error = !validLrn && visitedLrn;

  return (
    <FormControl
      label="Learner's Reference Number"
      error={error ? 'Please enter a valid LRN.' : null}
    >
      <Input
        startEnhancer={BadgeIcon}
        onKeyPress={lrnHandler}
        placeholder="100503351137"
        type="number"
        error={error}
        required
      />
    </FormControl>
  );
});
