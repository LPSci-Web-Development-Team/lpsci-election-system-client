/* eslint-disable import/no-default-export */
// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { ElectionPage } from '@lpsci/components/ElectionPage';
import { GlobalProvider } from '@lpsci/components/GlobalProvider';
import { ElectionAppHead } from '@lpsci/components/head/ElectionAppHead/ElectionAppHead';
import { ElectionSignIn } from '@lpsci/components/sign-in/ElectionSignIn';

export const config = { amp: 'hybrid' };

export default React.memo(() => (
  <GlobalProvider>
    <ElectionAppHead title="SSG Election" description="Election Web App" />
    <ElectionPage>
      <ElectionSignIn />
    </ElectionPage>
  </GlobalProvider>
));
