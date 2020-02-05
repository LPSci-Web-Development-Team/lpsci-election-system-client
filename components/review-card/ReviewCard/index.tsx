// ANCHOR React
import * as React from 'react';

// ANCHOR Scoped Models
import { VotingTab } from 'scoped-models/voting/VotingTab';

// ANCHOR UI Models
import { IPosition } from 'models/interface/Vote';

// ANCHOR Components
import { ReviewCardContainer } from '../ReviewCardContainer';
import { ReviewCardHeading } from '../ReviewCardHeading';
import { ReviewCardBody } from '../ReviewCardBody';

export const ReviewCard = React.memo(() => {
  // ANCHOR Voting Tab Models
  const [voteList, setVoteList] = VotingTab.useSelectors((state) => [
    state.voteList, state.setVoteList,
  ]);

  React.useEffect(() => {
    // ANCHOR Check for previously voted candidate
    setVoteList(JSON.parse(localStorage.getItem('voteList') ?? '[{}]'));
  }, [setVoteList]);

  return (
    <>
      {
        Object.values(IPosition).map((position, index) => (
          <ReviewCardContainer key={index}>
            {
              voteList && voteList.map((item, i) => (
                item.position === position && (
                  <React.Fragment key={i}>
                    <ReviewCardHeading
                      position={position}
                      color={item.party?.colorHex ?? '#a5a6aa'}
                    />
                    <ReviewCardBody position={position} />
                  </React.Fragment>
                )
              ))
            }
          </ReviewCardContainer>
        ))
      }
    </>
  );
});
