import * as ROLES from './roles';

// A signed in user
export const isUser = authUser => !!authUser;

// A signed in non-anonymous user
export const isSignedInKnownUser = authUser => !!authUser && !authUser.isAnon;

// A signed in anonymous user (used anonymous authentication; i.e., no email)
export const isSignedInAnonUser = authUser => !!authUser && authUser.isAnon;

// A signed in user that has no role (i.e., regular non-affiliated user)
export const isSignedInRegularUser = authUser =>
  !!authUser &&
  (!authUser.roles || Object.keys(authUser.roles).length === 0);

// A signed in user that has signed their contract.
export const isSignedInCompleteUser = authUser =>
  !!authUser && !!authUser.contract && !!authUser.contract.signature;

// An admin with super read/write privileges on all users.
export const isSignedInAdmin = authUser =>
  !!authUser && !!authUser.roles && !!authUser.roles[ROLES.ADMIN];

// A dealer affiliated to a dealership who can view their users and contracts
// focused on the test drive use case. Must be linked to a dealership.
export const isSignedInDealer = authUser =>
  !!authUser &&
  !!authUser.roles && !!authUser.roles[ROLES.DEALER] &&
  !!authUser.dealership;

// A service employee affiliated to a dealership focused on the loaner/service
// use case. Must be linked to a dealership.
export const isSignedInService = authUser =>
  !!authUser &&
  !!authUser.roles && !!authUser.roles[ROLES.SERVICE] &&
  !!authUser.dealership;

// A user that can be viewed by a dealer account; same as a regular user for
// now.
export const isDealerViewable = user =>
  !!user &&
  (!user.roles || Object.keys(user.roles).length === 0);

// A signed in admin or dealer.
export const isSignedInAdminOrDealer = authUser => (
  !!authUser && !!authUser.roles &&
  (!!authUser.roles[ROLES.ADMIN] || !!authUser.roles[ROLES.DEALER])
);
