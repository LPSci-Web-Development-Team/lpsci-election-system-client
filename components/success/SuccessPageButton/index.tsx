// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Link from 'next/link';

// ANCHOR Base
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';

// ANCHOR Styles
import { BUTTON_CONTAINER, BUTTON } from './styles';

interface ISuccessPageButtonProps {
  text: string;
}

export const SuccessPageButton = React.memo(({ text }: ISuccessPageButtonProps) => (
  <Block overrides={BUTTON_CONTAINER}>
    <Link href="/">
      <Button overrides={BUTTON}>
        {text}
      </Button>
    </Link>
  </Block>
));
