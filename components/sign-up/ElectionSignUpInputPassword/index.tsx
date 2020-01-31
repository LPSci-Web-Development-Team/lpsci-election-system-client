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

// ANCHOR Styles
import { ElectionSignInInputContainer } from '@lpsci/components/sign-in/ElectionSignInInputContainer';
import { INPUT } from './styles';

interface IElectionPasswordProps {
  label: string;
  name: string;
}

export const ElectionSignUpInputPassword = React.memo(({ label, name }: IElectionPasswordProps) => {
  const MemoFontAwesome = useConstant(() => <FontAwesomeIcon icon={faLock} />);

  return (
    <ElectionSignInInputContainer>
      <FormControl
        label={label}
      >
        <Input
          placeholder="*****"
          type="password"
          name={name}
          startEnhancer={MemoFontAwesome}
          overrides={INPUT}
        />
      </FormControl>
    </ElectionSignInInputContainer>
  );
});
