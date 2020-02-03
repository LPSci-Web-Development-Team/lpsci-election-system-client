// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Card } from 'baseui/card';

// ANCHOR  Styles
import { CARD } from './styles';

interface ICandidateContainerProps {
  children: React.ReactNode;
}

export const ReviewCardContainer = React.memo(({ children }: ICandidateContainerProps) => (
  <Card overrides={CARD}>
    {children}
  </Card>
));
