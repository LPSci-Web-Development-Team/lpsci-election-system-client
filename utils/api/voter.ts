// ANCHOR Axios
import { POST } from '../axios/methods';

// ANCHOR Payloads
import { ISignUpPayload, ISignInPayload } from '../payloads/user';


export async function signupUser(payload: ISignUpPayload) {
  return POST('/api/voters', payload);
}

export async function signinUser(payload: ISignInPayload) {
  return POST('/api/voters/signin', payload);
}
