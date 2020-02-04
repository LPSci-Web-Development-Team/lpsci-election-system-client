// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { ConfirmationModal } from 'scoped-models/review-modal/ConfirmationModal';

// ANCHOR Styles
import { BUTTON } from './styles';

export const ReviewVoteButton = React.memo(() => {
  const setModal = ConfirmationModal.useSelector((state) => state.setModal);

  const openModal = React.useCallback(() => setModal(true), [setModal]);
  return (
    <Button
      overrides={BUTTON}
      onClick={openModal}
    >
    Cast Vote
    </Button>
  );
});
