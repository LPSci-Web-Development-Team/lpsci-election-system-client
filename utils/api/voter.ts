// ANCHOR js-cookie
import cookie from 'js-cookie';

// ANCHOR Axios
import { POST } from '../axios/methods';

// ANCHOR Payloads
import { ISignUpPayload, ISignInPayload, ISendVotePayload } from '../payloads/user';

export async function signupUser(payload: ISignUpPayload) {
  return POST('/api/voters', payload);
}

export async function signinUser(payload: ISignInPayload) {
  return POST('/api/voters/login', payload);
}

export async function sendVote(payload: ISendVotePayload) {
  return POST('/api/votes', payload, {
    headers: {
      Authorization: cookie.get('access_token'),
    },
  });
}
