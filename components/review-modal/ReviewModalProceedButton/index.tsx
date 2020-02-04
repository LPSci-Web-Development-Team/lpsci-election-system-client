// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Scoped Models
import { ConfirmationModal } from '@lpsci/scoped-models/review-modal/ConfirmationModal';

// ANCHOR Next
import Link from 'next/link';

export const ReviewModalProceedButton = React.memo(() => {
  const setModal = ConfirmationModal.useSelector((state) => state.setModal);

  const closeModal = React.useCallback(() => setModal(false), [setModal]);

  return (
    <Link href="/success">
      <ModalButton onClick={closeModal}>Proceed</ModalButton>
    </Link>
  );
});
