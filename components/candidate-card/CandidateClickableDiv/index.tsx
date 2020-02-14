// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';

// ANCHOR Scoped Models
import { VotingTab } from 'scoped-models/voting/VotingTab';

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
  positionIndex: number;
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
  positionIndex,
}: ICandidateClickableDivProps) => {
  // ANCHOR Voting Tab Models
  const [vote, setVote] = VotingTab.useSelectors((state) => [
    state.vote, state.setVote,
  ]);

  const changeActiveVote = React.useCallback(() => {
    // ANCHOR Unselect and Select
    if (vote && vote.id === candidateUuid) {
      setVote({
        index: positionIndex,
        position: candidatePosition,
        id: undefined,
        firstName: undefined,
        lastName: undefined,
        party: undefined,
        imageURL: undefined,
      });
    } else {
      setVote({
        index: positionIndex,
        id: candidateUuid,
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
  }, [
    candidateColorHex,
    candidateFirstName,
    candidateImage,
    candidateLastName,
    candidateParty,
    candidatePosition,
    candidateUuid,
    positionIndex,
    setVote,
    vote,
  ]);

  return (
    <>
      <ClickableDiv onClick={changeActiveVote}>
        {children}
      </ClickableDiv>
    </>
  );
});
