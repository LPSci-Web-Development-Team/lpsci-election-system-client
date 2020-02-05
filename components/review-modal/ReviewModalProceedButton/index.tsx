// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Link from 'next/link';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Scoped Models
import { ConfirmationModal } from 'scoped-models/review-modal/ConfirmationModal';

export const ReviewModalProceedButton = React.memo(() => {
  const setModal = ConfirmationModal.useSelector((state) => state.setModal);

  const closeModal = React.useCallback(() => setModal(false), [setModal]);

  return (
    <Link href="/vote-success">
      <ModalButton onClick={closeModal}>Proceed</ModalButton>
    </Link>
  );
});
