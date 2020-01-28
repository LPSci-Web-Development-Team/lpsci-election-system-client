// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Components
import { ElectionSignInHeading } from '../ElectionSignInHeading';

// ANCHOR Styles


export const ElectionSignIn = React.memo(() => (
  <>
    <ElectionSignInHeading />
    <FormControl label="Input label" caption="Input caption">
      <Input />
    </FormControl>
    <FormControl
      positive="Positive caption"
      label="Input label"
      caption="Input caption"
    >
      <Input positive />
    </FormControl>
    <FormControl
      error="Error caption"
      label="Input label"
      caption="Input caption"
    >
      <Input error />
    </FormControl>
  </>
));
