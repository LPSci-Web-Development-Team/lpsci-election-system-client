// ANCHOR js-cookie
import cookies from 'js-cookie';

// ANCHOR Axios
import { GET, POST } from '../axios/methods';

// ANCHOR Payloads
import { ISignUpPayload, ISignInPayload, ISendVotePayload } from '../payloads/user';

export async function signupUser(payload: ISignUpPayload) {
  return POST('/api/voters', payload);
}

export async function checkIfVoted(voterId: string) {
  return GET(`/api/voters/${voterId}/votes`);
}

export async function voterIdentifySection(voterId: string) {
  return GET(`/api/voters/${voterId}/sections`, {
    headers: {
      Authorization: cookies.get('access_token'),
    },
  });
}

export async function signinUser(payload: ISignInPayload) {
  return POST('/api/voters/login', payload);
}

export async function sendVote(payload: ISendVotePayload) {
  return POST('/api/votes', payload, {
    headers: {
      Authorization: cookies.get('access_token'),
    },
  });
}
