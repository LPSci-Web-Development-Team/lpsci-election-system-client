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

// ANCHOR Components
import { ElectionSignInInputContainer } from '@lpsci/components/sign-in/ElectionSignInInputContainer';

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
        />
      </FormControl>
    </ElectionSignInInputContainer>
  );
});
