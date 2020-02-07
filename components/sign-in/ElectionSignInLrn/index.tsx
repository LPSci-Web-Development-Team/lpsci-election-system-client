// ANCHOR React
import * as React from 'react';

// ANCHOR Hooks
import { useConstant } from 'utils/hooks/useConstant';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';

export const ElectionSignInInputLRN = React.memo(() => {
  const MemoFontAwesome = useConstant(() => <FontAwesomeIcon icon={faIdBadge} />);

  return (
    <FormControl
      label="Learner's Reference Number"
    >
      <Input
        placeholder="226503351137"
        startEnhancer={MemoFontAwesome}
        name="lrn"
      />
    </FormControl>
  );
});
