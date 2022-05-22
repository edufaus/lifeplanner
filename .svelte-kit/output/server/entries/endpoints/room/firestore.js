import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
let firebaseConfig = {
  apiKey: "AIzaSyAouayCtY1vfQYR8MJDn_AMrkEDEPYsyNk",
  authDomain: "lifeplanner-a1cea.firebaseapp.com",
  projectId: "lifeplanner-a1cea",
  storageBucket: "lifeplanner-a1cea.appspot.com",
  messagingSenderId: "681439159972",
  appId: "1:681439159972:web:681db05832924401632831"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
