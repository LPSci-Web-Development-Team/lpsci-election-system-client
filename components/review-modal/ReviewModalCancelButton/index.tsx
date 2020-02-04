// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Scoped Models
import { ConfirmationModal } from 'scoped-models/review-modal/ConfirmationModal';

// ANCHOR Styles
import { BUTTON } from './styles';

export const ReviewModalCancelButton = React.memo(() => {
  const setModal = ConfirmationModal.useSelector((state) => state.setModal);

  const closeModal = React.useCallback(() => setModal(false), [setModal]);

  return (
    <ModalButton
      overrides={BUTTON}
      onClick={closeModal}
    >
Cancel
    </ModalButton>
  );
});
