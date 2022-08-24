// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5YLWyzP_WwBadRqMcpAifyoBgcToEtQs",
  authDomain: "fir-gallery-e6838.firebaseapp.com",
  projectId: "fir-gallery-e6838",
  storageBucket: "fir-gallery-e6838.appspot.com",
  messagingSenderId: "821266396088",
  appId: "1:821266396088:web:c58de059362991c7e1554d",
  measurementId: "G-CDRKR7TS9R",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projStorage = firebase.storage();
const projFirestore = firebase.firestore();

export { projFirestore, projStorage };
