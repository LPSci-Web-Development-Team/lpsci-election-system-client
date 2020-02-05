// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Select, Option } from 'baseui/select';

// ANCHOR Components
import { ElectionSignInInputContainer } from '@lpsci/components/sign-in/ElectionSignInInputContainer';

// ANCHOR Models
import { SignUpFormInput } from '@lpsci/scoped-models/sign-up/SignUpFormInput';

// ANCHOR Utils
import { GET } from '@lpsci/utils/axios/methods';

export const ElectionSignUpSection = React.memo(() => {
  const [gradeLevel, setSection, sectionsSelect, setSectionsSelect, sectionHandler] = SignUpFormInput.useSelectors(
    (state) => [state.gradeLevel, state.setSection, state.sectionsSelect, state.setSectionsSelect, state.handler.section],
  );

  const [selected, setSelected] = React.useState();

  const onChange = React.useCallback(({ value }) => {
    setSelected(value);
    setSection(value[0].id);
  }, [setSection]);

  React.useEffect(() => {
    const selectedSection: Option[] | undefined = [];
    GET('/api/sections').then((response) => {
      response.data.forEach((section: any) => {
        if (section.gradeLevel === gradeLevel) {
          selectedSection.push({
            label: section.name,
            id: section.name,
          });
        }
        setSectionsSelect([...selectedSection]);
      });
    }).catch((err) => console.log(err));
  }, [gradeLevel, sectionHandler, setSectionsSelect]);

  React.useEffect(() => {
    setSelected(null);
  }, [gradeLevel, setSelected]);

  return (
    <ElectionSignInInputContainer>
      <FormControl label="Section">
        <Select
          value={selected}
          options={sectionsSelect}
          placeholder="Select Section..."
          onChange={onChange}
          searchable={false}
          clearable={false}
          required
        />
      </FormControl>
    </ElectionSignInInputContainer>
  );
});
