/* eslint-disable import/no-default-export */
// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { ElectionPage } from 'components/ElectionPage';
import { GlobalProvider } from 'components/GlobalProvider';
import { ElectionAppHead } from 'components/head/ElectionAppHead/ElectionAppHead';
import { ElectionSignIn } from 'components/sign-in/ElectionSignIn';

export const config = { amp: 'hybrid' };

export default React.memo(() => (
  <GlobalProvider>
    <ElectionAppHead title="SSG Election" description="Election Web App" />
    <ElectionPage>
      <ElectionSignIn />
    </ElectionPage>
  </GlobalProvider>
));
