import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDmyEWsvMM2ToY-O5363I9LjhlZTwETAOk",
    authDomain: "ecommerce-project-b8b14.firebaseapp.com",
    projectId: "ecommerce-project-b8b14",
    storageBucket: "ecommerce-project-b8b14.appspot.com",
    messagingSenderId: "823724832753",
    appId: "1:823724832753:web:0a0cd52cff3c8bcd4b3650",
    measurementId: "G-P6118DT7ZC"
  }

  export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({displayName, email, createdAt, ...addtionalData})
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;