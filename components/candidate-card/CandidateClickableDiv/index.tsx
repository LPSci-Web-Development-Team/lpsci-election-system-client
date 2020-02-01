// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';

// ANCHOR Scoped Models
import { VotingTab } from 'models/scoped-models/voting/VotingTab';

// ANCHOR  UI Models
import { IPosition } from 'models/interface/Vote';

const ClickableDiv = styled('div',
  {
    width: '100%',
    height: '100%',
  });

interface ICandidateClickableDivProps {
  children: React.ReactNode;
  candidateUuid: string;
  candidateFirstName: string;
  candidateLastName: string;
  candidateParty: string;
  candidatePosition: IPosition;
  candidateImage: string;
  candidateColorHex: string;
}

export const CandidateClickableDiv = React.memo(({
  children,
  candidateUuid,
  candidateFirstName,
  candidateLastName,
  candidateParty,
  candidatePosition,
  candidateImage,
  candidateColorHex,
}: ICandidateClickableDivProps) => {
  // ANCHOR Voting Tab Models
  const [vote, setVote] = VotingTab.useSelectors((state) => [
    state.vote, state.setVote,
  ]);

  const changeActiveVote = React.useCallback(() => {
    if (vote?.candidateId === candidateUuid) {
      setVote({
        position: candidatePosition,
        candidateId: undefined,
        firstName: undefined,
        lastName: undefined,
        party: undefined,
        imageURL: undefined,
      });
    } else {
      setVote({
        candidateId: candidateUuid,
        firstName: candidateFirstName,
        lastName: candidateLastName,
        party: {
          name: candidateParty,
          colorHex: candidateColorHex,
        },
        position: candidatePosition,
        imageURL: candidateImage,
      });
    }
  }, [vote]);

  return (
    <>
      <ClickableDiv onClick={changeActiveVote}>
        {children}
      </ClickableDiv>
    </>
  );
});
