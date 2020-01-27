import * as React from 'react';

// ANCHOR Components
import { ElectionLayout } from './base/ElectionLayout';
import { ElectionContent } from './content/ElectionContent';

interface IElectionPageProps {
  children: React.ReactNode;
}

export const ElectionPage = ({ children }: IElectionPageProps) => (
  <ElectionLayout>
    <ElectionContent>
      {children}
    </ElectionContent>
  </ElectionLayout>
);
