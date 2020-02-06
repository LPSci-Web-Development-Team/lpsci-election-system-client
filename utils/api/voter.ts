// ANCHOR Axios
import { POST } from '../axios/methods';

// ANCHOR Payloads
import { ISignUpPayload } from '../payloads/user';


export async function signupUser(payload: ISignUpPayload) {
  return POST('/api/voters', payload);
}
