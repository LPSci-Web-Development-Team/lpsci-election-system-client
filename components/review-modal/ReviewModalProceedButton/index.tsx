// ANCHOR React
import * as React from 'react';

// ANCHOR js-cookie
import cookies from 'js-cookie';

// ANCHOR Next
import Router from 'next/router';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Interface
import { IVoteList } from 'models/interface/Vote';

// ANCHOR Utils
import { sendVote } from '../../../utils/api/voter';

export const ReviewModalProceedButton = React.memo(() => {
  const onClick = React.useCallback(() => {
    const voteList = localStorage.getItem('voteList');
    if (voteList !== null) {
      const voteListArray = JSON.parse(voteList);
      voteListArray.forEach((vote: IVoteList) => {
        sendVote({
          candidateId: vote.candidateId,
          voterId: cookies.get('voterId'),
          position: vote.position,
        });
      });
      localStorage.removeItem('voteList');
      localStorage.removeItem('activeTab');
      cookies.set('voterId', '');
      cookies.set('gradeLevel', '');
      cookies.set('access_token', '');
      Router.push('/vote-success');
    }
  }, []);


  return (
    <ModalButton onClick={onClick}>Proceed</ModalButton>
  );
});
