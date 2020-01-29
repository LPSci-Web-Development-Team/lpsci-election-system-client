// ANCHOR React
import * as React from 'react';

// ANCHOR Base

// ANCHOR Components
import { ElectionPage } from '@lpsci/components/ElectionPage';
import { GlobalProvider } from '@lpsci/components/GlobalProvider';
import { ElectionAppHead } from '@lpsci/components/head/ElectionAppHead/ElectionAppHead';
import { ElectionSignIn } from '@lpsci/components/sign-in/ElectionSignIn';

// eslint-disable-next-line import/no-default-export
export default React.memo(() => (
  <GlobalProvider>
    <ElectionAppHead title="SSG Election" description="Election Web App" />
    <ElectionPage>
      <ElectionSignIn />
    </ElectionPage>
  </GlobalProvider>
));
