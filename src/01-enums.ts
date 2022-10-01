export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}


export type User = {
  username: string;
  role: ROLES
}

const sebasUSer: User = {
  username: 'sebasbyte',
  role: ROLES.ADMIN
}
