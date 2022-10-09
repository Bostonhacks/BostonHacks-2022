import { initializeApp } from "firebase/app";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChESHqc0zP-4hvOOqC-y6GiTNAr5UztJs",
  authDomain: "bhacks2022-48274.firebaseapp.com",
  projectId: "bhacks2022-48274",
  storageBucket: "bhacks2022-48274.appspot.com",
  messagingSenderId: "112187725972",
  appId: "1:112187725972:web:f287c35e5e90f23e2abc81"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "applications"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "applications"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        status: "Not Started"
      });
    }
  } catch (err) {
    console.error(err);

  }
};

export const logout = () => {
  signOut(auth);
};