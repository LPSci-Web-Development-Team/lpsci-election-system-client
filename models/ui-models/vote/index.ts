import { ICandidate, IPosition } from 'models/interface/Vote';

export const VOTE: ICandidate[] = [
  {
    firstName: 'Adrian',
    lastName: 'Dayrit',
    party: {
      name: 'Lakas',
      colorHex: '#e62121',
    },
    position: IPosition.President,
    imageURL: 'https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.0-9/29695346_804246233093525_1751249780352981014_n.jpg?_nc_cat=101&_nc_oc=AQnWDAdsPEw30rEhOWK7zf6iHkAcdeBYtWNEtwuB5Zl8fMqsC5-wULxyaKRF8GSphFg&_nc_ht=scontent.fmnl4-2.fna&oh=85040f811a49a2f24e4afb0ec7f11f20&oe=5EDA54C4',
  },
  {
    firstName: 'Prince Neil Cedrick',
    lastName: 'Castro',
    party: {
      name: 'Laban',
      colorHex: '#6FAE30',
    },
    position: IPosition.President,
    imageURL: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.0-9/58649504_1486528368149285_3526713872855597056_n.jpg?_nc_cat=108&_nc_ohc=EGKSPyVbclwAX8siQmm&_nc_ht=scontent.fmnl4-6.fna&oh=79af9ffd397cc16d97628c67d689671f&oe=5ED9C1C7',
  },
];
