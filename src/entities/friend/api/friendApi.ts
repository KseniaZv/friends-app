export interface Friend {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  twitter: string;
}

export const initialFriendList: Friend[] = [
  {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    firstName: 'Jhon',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+37369111111',
    twitter: '@johndoe',
  },
  {
    id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    phone: '+37369222222',
    twitter: '@janesmith',
  },
  {
    id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex@example.com',
    phone: '+37369333333',
    twitter: '@alexjohnson',
  },
];
