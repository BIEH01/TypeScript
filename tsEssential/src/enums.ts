export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

const biUser: User = {
  username: 'Bi',
  role: ROLES.ADMIN,
};
