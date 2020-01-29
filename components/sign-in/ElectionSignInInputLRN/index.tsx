// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Styles
import { INPUT } from './styles';

export const ElectionSignInInputLRN = React.memo(() => (
  <FormControl
    label="Learner's Reference Number"
  >
    <Input
      placeholder="226503351137"
      startEnhancer={<FontAwesomeIcon icon={faIdBadge} />}
      overrides={INPUT}
    />
  </FormControl>
));
