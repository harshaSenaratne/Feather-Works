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


export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,createdAt,
                ...additionalData
            })
        }
        catch(error){
            console.log("Error creating user !!",error.message)
        }
    }

    return userRef;
}
 



  firebase.initializeApp(config);
  export const auth  = firebase.auth(); //exports firebase authentication for use
  export  const firestore = firebase.firestore(); //exports firestore for use

//   Google Authentication Configuration
  const provider = new firebase.auth.GoogleAuthProvider();  
  provider.setCustomParameters({prompt :'select_account'});

  export const signInWithGoogle =()=> auth.signInWithPopup(provider);

  export default firebase; //exports full firebase library for just in case of use