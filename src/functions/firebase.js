// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase-admin/app';

/*
import App from './firebase';
import {
	getFirestore,
	collection,
	getDocs,
	getDoc,
	query,
	doc,
	orderBy,
	limit
} from 'firebase/firestore/lite';
*/

//const { applicationDefault, cert } = require('firebase-admin/app');
//const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
//const { initializeApp } = require('firebase-admin/app'); 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/*
export const db = getFirestore(App);
export const getFromDB = async (collectionName) => {
	const getCollection = collection(db, collectionName);
	const dbdocs = await getDocs(getCollection);
	const data = dbdocs.docs.map((doc) => doc.data());
	return data;
};
export const getFromDBwithLimit = async (collectionName) => {
	const getCollection = collection(db, collectionName);
	const q = query(getCollection, orderBy('creationDate', 'desc'), limit(3));
	const dbdocs = await getDocs(q);
	const data = dbdocs.docs.map((doc) => doc.data());
	return data;
};

export const getDocument = async (collectionName, id) => {
	const docRef = doc(db, collectionName, id);
	const docSnap = await getDoc(docRef);
	return docSnap.data();
};*/



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAwwFtEOJ3peKSMHk72BA69I9b360sNH4o",
  authDomain: "virkschuvik.firebaseapp.com",
  projectId: "virkschuvik",
  storageBucket: "virkschuvik.appspot.com",
  messagingSenderId: "89328551063",
  appId: "1:89328551063:web:478e40ebf271fd0a1ad5d2",
  measurementId: "G-44XFVDNGEV"
};

firebase.initializeApp(config);



export default firebase;