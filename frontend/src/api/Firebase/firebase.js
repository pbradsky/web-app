import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
    this.storage = app.storage();
  }

  /* AUTH API */

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInAnonymously = () =>
    this.auth.signInAnonymously();

  doSignInWithPopup = () => {
    const provider = new app.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider);
  }

  doSignOut = () =>
    this.auth.signOut();

  doPasswordReset = email =>
    this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  doAccountDelete = () =>
    this.auth.currentUser.delete();

  doLinkWithEmailAndPassword = (email, password) => {
    const credential = app.auth.EmailAuthProvider.credential(email, password);
    return this.auth.currentUser.linkWithCredential(credential);
  }

  /* MERGE AUTH AND DB USER INFO */

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  /* USER API */
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');

  /* VEHICLE API */
  vehicle = (dealerId, vin) => this.db.ref(`dealerships/${dealerId}/vehicles/${vin}`);
  vehicles = dealerId => this.db.ref(`dealerships/${dealerId}/vehicles`);

  /* DEALERSHIP API */
  dealership = dealerId => this.db.ref(`dealerships/${dealerId}`);
}

export default Firebase;