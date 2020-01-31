import { ICandidate, IPosition } from 'models/interface/Vote';

export const VOTE: ICandidate[] = [
  {
    firstName: 'Prince',
    lastName: 'Castro',
    party: {
      name: 'Lakas',
      colorHex: '#e62121',
    },
    position: IPosition.President,
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTomd3CkfJrcFl7WOD3RpViSUDNNE72M1FPIqk6KZaGjdmdEBPu',
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
  {
    firstName: 'Neil',
    lastName: 'Castro',
    party: {
      name: 'Laban',
      colorHex: '#dbe617',
    },
    position: IPosition.President,
    imageURL: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.0-9/58649504_1486528368149285_3526713872855597056_n.jpg?_nc_cat=108&_nc_ohc=EGKSPyVbclwAX8siQmm&_nc_ht=scontent.fmnl4-6.fna&oh=79af9ffd397cc16d97628c67d689671f&oe=5ED9C1C7',
  },
];
