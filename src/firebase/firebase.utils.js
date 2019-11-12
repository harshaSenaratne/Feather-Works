import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCu_nJN0PohBTleNbAel2_1MPBp_FSFyOU",
    authDomain: "feather-works.firebaseapp.com",
    databaseURL: "https://feather-works.firebaseio.com",
    projectId: "feather-works",
    storageBucket: "feather-works.appspot.com",
    messagingSenderId: "974609073995",
    appId: "1:974609073995:web:edf9c6b294db29733ecace",
    measurementId: "G-6G3MSTZ0X1"
  };


  firebase.initializeApp(config);
  export const auth  = firebase.auth(); //exports firebase authentication for use
  export  const firestore = firebase.firestore(); //exports firestore for use

//   Google Authentication Configuration
  const provider = new firebase.auth.GoogleAuthProvider();  
  provider.setCustomParameters({prompt :'select_account'});

  export const signInWithGoogle =()=> auth.signInWithPopup(provider);

  export default firebase; //exports full firebase library for just in case of use