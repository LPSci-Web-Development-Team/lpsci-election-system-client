// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Modal, SIZE } from 'baseui/modal';

// ANCHOR Scoped Models
import { ConfirmationModal } from 'scoped-models/review-modal/ConfirmationModal';

// ANCHOR Components
import { ReviewModalHeading } from '../ReviewModalHeading';
import { ReviewModalBody } from '../ReviewModalBody';
import { ReviewModalFooter } from '../ReviewModalFooter';

// ANCHOR Styles
import { MODAL } from './styles';

export const ReviewModal = React.memo(() => {
  const [modal, setModal] = ConfirmationModal.useSelectors((state) => [
    state.modal, state.setModal,
  ]);

  const closeModal = React.useCallback(() => setModal(false), [setModal]);

  return (
    <Modal
      onClose={closeModal}
      isOpen={modal}
      size={SIZE.default}
      overrides={MODAL}
      autofocus={false}
    >
      <ReviewModalHeading />
      <ReviewModalBody />
      <ReviewModalFooter />
    </Modal>
  );
});
