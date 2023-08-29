import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { getStorage } from 'firebase/storage';
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    };

  //REACT_APP_FIREBASE_DATABASE=""
  //REACT_APP_FIREBASE_SENDER_ID=""

firebase.initializeApp(firebaseConfig);
export const storage = getStorage();
//export const db = getDatabase(firebase.initializeApp(firebaseConfig))
export default firebase;