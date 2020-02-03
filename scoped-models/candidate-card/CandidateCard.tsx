// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

export const CandidateCard = createModel(() => {
  const [selected, setSelected] = React.useState<boolean>(false);

  return {
    selected,
    setSelected,
  };
});
