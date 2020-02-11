/* eslint-disable no-mixed-operators */
// ANCHOR React
import * as React from 'react';

// ANCHOR js-cookie
import cookies from 'js-cookie';

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

  const gradeLevel = parseInt(cookies.get('gradeLevel') ?? '0', 10);

  React.useEffect(() => {
    // ANCHOR Check for previously voted candidate
    setVoteList(JSON.parse(localStorage.getItem('voteList') ?? '[{}]'));
  }, [setVoteList]);

  return (
    <>
      {
        Object.values(IPosition)
          .filter((position) => (
            gradeLevel === 7
              && position !== 'Level Rep. (9)'
              && position !== 'Level Rep. (10)'
              && position !== 'Level Rep. (11)'
              && position !== 'Level Rep. (12)'
            || gradeLevel === 8
              && position !== 'Level Rep. (8)'
              && position !== 'Level Rep. (10)'
              && position !== 'Level Rep. (11)'
              && position !== 'Level Rep. (12)'
            || gradeLevel === 9
              && position !== 'Level Rep. (8)'
              && position !== 'Level Rep. (9)'
              && position !== 'Level Rep. (11)'
              && position !== 'Level Rep. (12)'
            || gradeLevel === 10
              && position !== 'Level Rep. (8)'
              && position !== 'Level Rep. (9)'
              && position !== 'Level Rep. (10)'
              && position !== 'Level Rep. (12)'
            || gradeLevel === 11
              && position !== 'Level Rep. (8)'
              && position !== 'Level Rep. (9)'
              && position !== 'Level Rep. (10)'
              && position !== 'Level Rep. (11)'
            || gradeLevel === 12
              && position !== 'Level Rep. (8)'
              && position !== 'Level Rep. (9)'
              && position !== 'Level Rep. (10)'
              && position !== 'Level Rep. (11)'
              && position !== 'Level Rep. (12)'
          ))
          .map((position, index) => (
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
