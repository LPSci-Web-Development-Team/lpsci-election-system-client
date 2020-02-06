// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Select, Option } from 'baseui/select';

// ANCHOR Components
import { ElectionSignInInputContainer } from '@lpsci/components/sign-in/ElectionSignInInputContainer';

// ANCHOR Models
import { IGradeLevel } from 'models/interface/SignUp';
import { SignUpFormInput } from '@lpsci/scoped-models/sign-up/SignUpFormInput';

// ANCHOR Utils
import { isNumber } from 'util';

export const ElectionSignUpGradeLevel = React.memo(() => {
  const [gradeLevelHandler, setGradeLevel] = SignUpFormInput.useSelectors((state) => [state.handler.gradeLevel, state.setGradeLevel]);

  const [selected, setSelected] = React.useState();

  const onChange = React.useCallback(({ value }) => {
    setSelected(value);
    setGradeLevel(value[0].id);
  }, [setGradeLevel]);

  const options: Option[] = [];

  React.useEffect(() => {
    Object.keys(IGradeLevel).forEach((item: any) => {
      if (isNumber(IGradeLevel[item])) {
        options.push({
          label: `Grade ${IGradeLevel[item]}`,
          id: IGradeLevel[item],
        });
      }
    });
  }, [gradeLevelHandler, options]);

  return (
    <ElectionSignInInputContainer>
      <FormControl label="Grade Level">
        <Select
          value={selected}
          options={options}
          placeholder="Select Grade Level..."
          onChange={onChange}
          searchable={false}
          clearable={false}
          required
        />
      </FormControl>
    </ElectionSignInInputContainer>
  );
});