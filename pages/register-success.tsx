// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { ElectionPage } from 'components/ElectionPage';
import { GlobalProvider } from 'components/GlobalProvider';
import { ElectionAppHead } from 'components/head/ElectionAppHead/ElectionAppHead';
import { SuccessPage } from '@lpsci/components/success/SuccessPage';

// eslint-disable-next-line import/no-default-export
export default React.memo(() => (
  <GlobalProvider>
    <ElectionAppHead title="SSG Election" description="Election Web App" />
    <ElectionPage>
      <SuccessPage action="Registered" src="img/register-success.png" text="Done" />
    </ElectionPage>
  </GlobalProvider>
));
