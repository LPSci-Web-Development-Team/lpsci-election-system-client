// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { RadioGroup, Radio, ALIGN } from 'baseui/radio';
import { Paragraph1 } from 'baseui/typography';

// ANCHOR Models
import { IPosition } from 'models/interface/Vote';
import { VOTE } from 'models/ui-models/vote';

// ANCHOR Components
import { VotingTab } from '@lpsci/scoped-models/voting/VotingTab';
import { ReviewCardCandidate } from '../ReviewCardCandidate';

// ANCHOR Styles
import { ABSTAIN, SELECTED, OPAQUE } from './styles';

interface IReviewCardRadioProps {
  position: IPosition;
}

export const ReviewCardRadio = React.memo(({ position }: IReviewCardRadioProps) => {
  const [voteList, setVoteList] = VotingTab.useSelectors((state) => [
    state.voteList, state.setVoteList,
  ]);
  const [value, setValue] = React.useState<string>(position);

  React.useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    voteList && voteList.forEach((item) => {
      // eslint-disable-next-line no-unused-expressions
      item.position === position && setValue(item.candidateId ?? position);
    });
  }, [position, voteList]);

  return (
    <RadioGroup
      value={value}
      onChange={(e) => {
        // eslint-disable-next-line no-unused-expressions
        e.target.value === position && (
          voteList && voteList.forEach((vote) => {
            // eslint-disable-next-line no-unused-expressions
            vote.position === position && (
              Object.assign(vote, {
                candidateId: undefined,
                firstName: undefined,
                lastName: undefined,
                party: undefined,
                imageURL: undefined,
              })
            );
          })
        );
        VOTE.forEach((candidate) => {
          // eslint-disable-next-line no-unused-expressions
          candidate.candidateId === e.target.value && (
            voteList && voteList.forEach((vote) => {
              // eslint-disable-next-line no-unused-expressions
              vote.position === candidate.position && (
                Object.assign(vote, candidate)
              );
            })
          );
        });
        localStorage.setItem('voteList', JSON.stringify(voteList));
        setVoteList(JSON.parse(localStorage.getItem('voteList') ?? '[{}]'));
      }}
      align={ALIGN.vertical}
    >
      {
        VOTE.map((candidate, index) => (
          candidate.position === position
          && (
            <Radio
              key={index}
              overrides={value === candidate.candidateId ? SELECTED : OPAQUE}
              value={candidate.candidateId}
            >
              <ReviewCardCandidate candidate={candidate} />
            </Radio>
          )
        ))
      }
      <Radio overrides={value === position ? SELECTED : OPAQUE} value={position}>
        <Paragraph1 overrides={ABSTAIN}>Abstain</Paragraph1>
      </Radio>
    </RadioGroup>
  );
});
