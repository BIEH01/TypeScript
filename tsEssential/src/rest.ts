import { User, ROLES } from './enums';

const currentUser: User = {
  username: 'Bi',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === 'admin') {
    return true;
  }
  return false;
};

const rta = checkAdminRole();
console.log('checkAdminRole', rta);

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
};

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta2);

export const checkRoles = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta3 = checkRoles([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRoles', rta3);

// Rest params
export const checkAllRoles = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta4 = checkAllRoles(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkAllRoles', rta4);
