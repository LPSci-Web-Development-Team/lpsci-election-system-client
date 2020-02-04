// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useDebouncedState } from 'utils/hooks/useDebouncedState';

export const SignUpFormInput = createModel(() => {
  const [lrn, setLrn] = useDebouncedState('', 150);
  const [password, setPassword] = useDebouncedState('', 150);
  const [firstName, setFirstName] = useDebouncedState('', 150);
  const [lastName, setLastName] = useDebouncedState('', 150);
  const [gradeLevel, setGradeLevel] = React.useState();
  const [section, setSection] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [sectionSelect, setSectionSelect] = React.useState();
  const [gradeLevelSelect, setGradeLevelSelect] = React.useState<any>();

  return {
    lrn,
    setLrn,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    gradeLevel,
    setGradeLevel,
    section,
    setSection,
    loading,
    setLoading,
    error,
    setError,
    sectionSelect,
    setSectionSelect,
    gradeLevelSelect,
    setGradeLevelSelect,
  };
});
