import * as React from 'react';

// ANCHOR Components
import { ElectionLayout } from './base/ElectionLayout';
import { ElectionContent } from './content/ElectionContent';

interface ILyonPageProps {
  children: React.ReactNode;
}

export function LyonPage({ children }: ILyonPageProps) {
  return (
    <ElectionLayout>
      <ElectionContent>
        {children}
      </ElectionContent>
    </ElectionLayout>
  );
}
