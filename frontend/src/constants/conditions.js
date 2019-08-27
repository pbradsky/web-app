import * as ROLES from './roles';

export const isSignedInUser = authUser => !!authUser;
export const isSignedInApprovedUser = authUser =>
  authUser && !!authUser.roles[ROLES.APPROVED];
export const isSignedInAdmin = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];
