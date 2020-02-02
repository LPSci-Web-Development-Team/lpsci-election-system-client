// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Select } from 'baseui/select';

// ANCHOR Components
import { ElectionSignInInputContainer } from '@lpsci/components/sign-in/ElectionSignInInputContainer';

// ANCHOR UI Models
import { ISection, IGradeLevel } from 'models/interface/SignUp';

// ANCHOR Utils
import { isNumber } from 'util';
import { SignUpFormInput } from 'models/scoped-models/sign-up/SignUpFormInput';

interface IElectionSignUpProps {
  sectionValue: ISection[];
  label: string;
}

export const ElectionSignUpSelect = React.memo(({ sectionValue, label }: IElectionSignUpProps) => {
  const [
    gradeLevel, setGradeLevel, setSection,
    gradeLevelSelect, sectionSelect, setGradeLevelSelect, setSectionSelect,
  ] = SignUpFormInput.useSelectors((state) => [
    state.gradeLevel, state.setGradeLevel, state.setSection,
    state.gradeLevelSelect, state.sectionSelect, state.setGradeLevelSelect, state.setSectionSelect,
  ]);

  const options: any = [];

  React.useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    label === 'Section'
      ? (sectionValue.forEach((item) => {
        // eslint-disable-next-line no-unused-expressions
        gradeLevel === `Grade ${item.gradeLevel}` && options.push({
          label: item.section,
          id: item.section,
        });
      }))
      : (
        Object.keys(IGradeLevel).forEach((item: any) => {
          if (isNumber(IGradeLevel[item])) {
            options.push({
              label: `Grade ${IGradeLevel[item]}`,
              id: IGradeLevel[item],
            });
          }
        })
      );
  }, [gradeLevel, label, options, sectionValue]);

  React.useEffect(() => {
    setSectionSelect(null);
  }, [gradeLevelSelect, setSectionSelect]);

  const changeValue = React.useCallback((params) => {
    // eslint-disable-next-line no-unused-expressions
    label === 'Section' ? setSectionSelect(params.value)
      : setGradeLevelSelect(params.value);
    // eslint-disable-next-line no-unused-expressions
    label === 'Section' ? setSection(params.value[0].label)
      : setGradeLevel(params.value[0].label);
  }, [label, setGradeLevel, setGradeLevelSelect, setSection, setSectionSelect]);

  return (
    <ElectionSignInInputContainer>
      <FormControl
        label={label}
      >
        <Select
          options={options}
          value={label === 'Section' ? sectionSelect : gradeLevelSelect}
          filterOutSelected={false}
          required
          searchable={false}
          clearable={false}
          placeholder={label === 'Section' ? 'Select section...' : 'Select grade level...'}
          onChange={changeValue}
        />
      </FormControl>
    </ElectionSignInInputContainer>
  );
});
