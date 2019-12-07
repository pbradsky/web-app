import * as ROLES from './roles';

export const isSignedInUser = authUser => !!authUser;
export const isSignedInAdmin = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];
export const isSignedInApprovedUser = authUser =>
  authUser && !!authUser.roles[ROLES.APPROVED];
export const isSignedInDev = authUser =>
  authUser && !!authUser.roles[ROLES.DEV];
