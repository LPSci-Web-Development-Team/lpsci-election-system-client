// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Styles
import { INPUT } from './styles';

interface IElectionInputProps {
  label: string;
  placeholder: string;
  name: string;
  startEnhancer: JSX.Element;
}

export const ElectionSignUpInputText = React.memo(({
  label,
  placeholder,
  name,
  startEnhancer,
}: IElectionInputProps) => (
  <FormControl
    label={label}
  >
    <Input
      placeholder={placeholder}
      startEnhancer={startEnhancer}
      overrides={INPUT}
      name={name}
    />
  </FormControl>
));
