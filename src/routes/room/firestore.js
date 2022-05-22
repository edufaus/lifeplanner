
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
let firebaseConfig = {
  apiKey: "AIzaSyAouayCtY1vfQYR8MJDn_AMrkEDEPYsyNk",
  authDomain: "lifeplanner-a1cea.firebaseapp.com",
  projectId: "lifeplanner-a1cea",
  storageBucket: "lifeplanner-a1cea.appspot.com",
  messagingSenderId: "681439159972",
  appId: "1:681439159972:web:681db05832924401632831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);