import * as ROLES from './roles';

export const isSignedInUser = authUser => !!authUser;
export const isSignedInAdmin = authUser =>
  !!authUser && !!authUser.roles && !!authUser.roles[ROLES.ADMIN];
export const isSignedInApprovedUser = authUser =>
  !!authUser && !!authUser.roles && !!authUser.roles[ROLES.APPROVED];
export const isSignedInDealer = authUser =>
  !!authUser && !!authUser.roles && !!authUser.roles[ROLES.DEALER];
export const isDealerViewable = user =>
  !user.roles || !(user.roles[ROLES.DEALER] || user.roles[ROLES.ADMIN]);
