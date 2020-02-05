// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { SuccessPageHeading } from '../SuccessPageHeading';
import { SuccessPageIllustration } from '../SuccessPageIllustration';
import { SuccessPageButton } from '../SuccessPageButton';

interface ISuccessPageProps {
  action: string;
  src: string;
  text: string;
}

export const SuccessPage = React.memo(({ action, src, text }: ISuccessPageProps) => (
  <>
    <SuccessPageHeading action={action} />
    <SuccessPageIllustration src={src} alt={action} />
    <SuccessPageButton text={text} />
  </>
));
