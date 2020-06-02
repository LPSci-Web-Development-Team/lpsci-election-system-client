// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { SuccessPageHeading } from '../SuccessPageHeading';
import { SuccessPageIllustration } from '../SuccessPageIllustration';
import { SuccessPageButton } from '../SuccessPageButton';

interface ISuccessPageProps {
  value: string;
  src: string;
  text: string;
}

export const SuccessPage = React.memo(({ value, src, text }: ISuccessPageProps) => (
  <>
    <SuccessPageHeading text={value} />
    <SuccessPageIllustration src={src} alt={value} />
    <SuccessPageButton text={text} />
  </>
));
