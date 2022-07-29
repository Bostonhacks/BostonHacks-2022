import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyChESHqc0zP-4hvOOqC-y6GiTNAr5UztJs",
    authDomain: "bhacks2022-48274.firebaseapp.com",
    projectId: "bhacks2022-48274",
    storageBucket: "bhacks2022-48274.appspot.com",
    messagingSenderId: "112187725972",
    appId: "1:112187725972:web:f287c35e5e90f23e2abc81"
  };

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;