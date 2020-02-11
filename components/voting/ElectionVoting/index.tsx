/* eslint-disable no-mixed-operators */
// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Router from 'next/router';

// ANCHOR js-cookie
import cookies from 'js-cookie';

// ANCHOR UI Models
import { IPosition } from 'models/interface/Vote';

// ANCHOR Components
import { ElectionVotingTabContainer } from '../ElectionVotingTabContainer';
import { ElectionVotingTab } from '../ElectionVotingTab';
import { ElectionVotingTabHeading } from '../ElectionVotingTabHeading';
import { ElectionVotingButtonContainer } from '../ElectionVotingButtonContainer';
import { ElectionVotingButtonBack } from '../ElectionVotingButtonBack';
import { ElectionVotingButtonNext } from '../ElectionVotingButtonNext';
import { ElectionVotingFlexGrid } from '../ElectionVotingFlexGrid';

export const ElectionVoting = React.memo(() => {
  const gradeLevel = parseInt(cookies.get('gradeLevel') ?? '0', 10);

  const isLoggedIn = cookies.get('access_token') !== '';

  React.useEffect(() => {
    if (!isLoggedIn) {
      Router.push('/');
    }
  });

  return (
    <>
      <ElectionVotingTabContainer>
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
              <ElectionVotingTab title={position} key={index}>
                <ElectionVotingTabHeading position={position} positionIndex={index} />
                <ElectionVotingFlexGrid position={position} positionIndex={index} />
              </ElectionVotingTab>
            ))
        }
      </ElectionVotingTabContainer>
      <ElectionVotingButtonContainer>
        <ElectionVotingButtonBack />
        <ElectionVotingButtonNext />
      </ElectionVotingButtonContainer>
    </>
  );
});
