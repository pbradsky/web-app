import * as ROLES from './roles';

export const isUser = authUser => !!authUser;
export const isSignedInKnownUser = authUser => !!authUser && !authUser.isAnon;
export const isSignedInAdmin = authUser =>
  !!authUser && !!authUser.roles && !!authUser.roles[ROLES.ADMIN];
export const isSignedInCompleteUser = authUser =>
  !!authUser && !!authUser.contract && !!authUser.contract.signature;
export const isSignedInDealer = authUser =>
  !!authUser && !!authUser.roles && !!authUser.roles[ROLES.DEALER];
export const isDealerViewable = user =>
  !user.roles || !(user.roles[ROLES.DEALER] || user.roles[ROLES.ADMIN]);
