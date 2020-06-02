// ANCHOR js-cookie
import cookies from 'js-cookie';

// ANCHOR Axios
import { GET } from '../axios/methods';

export async function getCandidate() {
  return GET('/api/candidates/', {
    headers: {
      Authorization: cookies.get('access_token'),
    },
  });
}

export async function getParty(partyId: string) {
  return GET(`/api/parties/${partyId}`, {
    headers: {
      Authorization: cookies.get('access_token'),
    },
  });
}
