// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Styles
import { INPUT } from './styles';
import { ElectionSignInInputContainer } from '@lpsci/components/sign-in/ElectionSignInInputContainer';

interface IElectionInputProps {
  label: string;
  placeholder: string;
  name: string;
  Icon: JSX.Element;
}

export const ElectionSignUpInputText = React.memo(({
  label,
  placeholder,
  name,
  Icon,
}: IElectionInputProps) => (
    <ElectionSignInInputContainer>
      <FormControl
        label={label}
      >
        <Input
          placeholder={placeholder}
          startEnhancer={Icon}
          overrides={INPUT}
          name={name}
        />
      </FormControl>
    </ElectionSignInInputContainer>
));
