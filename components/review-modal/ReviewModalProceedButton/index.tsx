// ANCHOR React
import * as React from 'react';

// ANCHOR js-cookie
import cookies from 'js-cookie';

// ANCHOR Next
import Router from 'next/router';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Scoped Models
import { ConfirmationModal } from 'scoped-models/review-modal/ConfirmationModal';

// ANCHOR Interface
import { IVoteList } from 'models/interface/Vote';

// ANCHOR Utils
import { sendVote } from '../../../utils/api/voter';

export const ReviewModalProceedButton = React.memo(() => {
  const [setModal, disable, setDisable] = ConfirmationModal.useSelectors((state) => [
    state.setModal, state.disable, state.setDisable,
  ]);

  const onClick = React.useCallback(() => {
    const voteList = localStorage.getItem('voteList');
    setDisable(true);
    if (voteList !== null) {
      const voteListArray = JSON.parse(voteList);
      voteListArray.forEach((vote: IVoteList) => {
        sendVote({
          candidateId: vote.id,
          voterId: cookies.get('voterId'),
          position: vote.position,
        });
      });
      Router.push('/vote-success');
      setModal(false);
      localStorage.removeItem('voteList');
      localStorage.removeItem('activeTab');
      cookies.remove('voterId');
      cookies.remove('gradeLevel');
      cookies.remove('access_token');
      setDisable(false);
    }
  }, [setDisable, setModal]);


  return (
    <ModalButton onClick={onClick} disabled={disable}>Proceed</ModalButton>
  );
});
