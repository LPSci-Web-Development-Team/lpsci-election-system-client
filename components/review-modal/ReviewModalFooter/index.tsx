// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalFooter } from 'baseui/modal';

// ANCHOR Components
import { ReviewModalCancelButton } from '../ReviewModalCancelButton';
import { ReviewModalProceedButton } from '../ReviewModalProceedButton';

export const ReviewModalFooter = () => (
  <ModalFooter>
    <ReviewModalCancelButton />
    <ReviewModalProceedButton />
  </ModalFooter>
);
