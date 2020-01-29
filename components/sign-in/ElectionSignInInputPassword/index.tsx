// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Styles
import { INPUT } from './styles';

export const ElectionSignInInputPassword = React.memo(() => (
  <FormControl
    label="Password"
  >
    <Input
      placeholder="*****"
      type="password"
      startEnhancer={<FontAwesomeIcon icon={faLock} />}
      overrides={INPUT}
    />
  </FormControl>
));
