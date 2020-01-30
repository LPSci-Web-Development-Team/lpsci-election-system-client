// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { SignInFormInput } from 'models/scoped-models/sign-in/SigninFormInput';
import { VotingTab } from 'models/scoped-models/voting/VotingTab';

export const makeProviders = () => [
  /*
  ANCHOR: Provider for the SignInForm
  NOTE: Used for providing the input fields a value
  */
  <SignInFormInput.Provider key="SignInFormInput" />,
  /*
    ANCHOR: Provider for the SignInForm
    NOTE: Used for providing the input fields a value
    */
  <VotingTab.Provider key="VotingTab" />,
];
