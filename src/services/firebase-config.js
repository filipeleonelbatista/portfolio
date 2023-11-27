import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDlSDvVRBTuEBULLJ7F1Zny9uEKvm34U8I",
//   authDomain: "devchallenge-16edf.firebaseapp.com",
//   projectId: "devchallenge-16edf",
//   storageBucket: "devchallenge-16edf.appspot.com",
//   messagingSenderId: "457450543508",
//   appId: "1:457450543508:web:6afbe9416f72e9830b5781",
//   measurementId: "G-KKVZ30J836"
// };

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
