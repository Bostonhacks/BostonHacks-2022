import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

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