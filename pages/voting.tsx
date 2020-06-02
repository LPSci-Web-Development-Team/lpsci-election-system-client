// ANCHOR React
import * as React from 'react';

// ANCHOR Base

// ANCHOR Components
import { ElectionPage } from 'components/ElectionPage';
import { GlobalProvider } from 'components/GlobalProvider';
import { ElectionAppHead } from 'components/head/ElectionAppHead/ElectionAppHead';
import { ElectionVoting } from 'components/voting/ElectionVoting';

// eslint-disable-next-line import/no-default-export
export default React.memo(() => (
  <GlobalProvider>
    <ElectionAppHead title="SSG Election" description="Election Web App" />
    <ElectionPage>
      <ElectionVoting />
    </ElectionPage>
  </GlobalProvider>
));
