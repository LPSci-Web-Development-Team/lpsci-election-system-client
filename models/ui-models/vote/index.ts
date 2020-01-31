import { ICandidate, IPosition } from 'models/interface/Vote';

export const VOTE: ICandidate[] = [
  {
    firstName: 'Prince',
    lastName: 'Castro',
    party: {
      partyName: 'Lakas',
      colorHex: '#901241',
    },
    position: IPosition.President,
    imageURL: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.0-9/58649504_1486528368149285_3526713872855597056_n.jpg?_nc_cat=108&_nc_ohc=EGKSPyVbclwAX8siQmm&_nc_ht=scontent.fmnl4-6.fna&oh=79af9ffd397cc16d97628c67d689671f&oe=5ED9C1C7',
  },
  {
    firstName: 'Cedrick',
    lastName: 'Castro',
    party: {
      partyName: 'Laban',
      colorHex: '#901241',
    },
    position: IPosition.President,
    imageURL: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.0-9/58649504_1486528368149285_3526713872855597056_n.jpg?_nc_cat=108&_nc_ohc=EGKSPyVbclwAX8siQmm&_nc_ht=scontent.fmnl4-6.fna&oh=79af9ffd397cc16d97628c67d689671f&oe=5ED9C1C7',
  },
];
