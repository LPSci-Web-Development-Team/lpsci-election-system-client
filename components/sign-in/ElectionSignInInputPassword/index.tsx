// ANCHOR React
import * as React from 'react';

// ANCHOR Hooks
import { useConstant } from '@lpsci/utils/hooks/useConstant';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export const ElectionSignInInputPassword = React.memo(() => {
  const MemoFontAwesome = useConstant(() => <FontAwesomeIcon icon={faLock} />);

  return (
    <FormControl
      label="Password"
    >
      <Input
        placeholder="*****"
        type="password"
        startEnhancer={MemoFontAwesome}
        name="password"
      />
    </FormControl>
  );
});
