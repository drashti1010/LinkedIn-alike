import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQhYb2AjYtwCFQysC5d-nvLV3TjFY8tBo",
  authDomain: "linkedin-f4cc0.firebaseapp.com",
  projectId: "linkedin-f4cc0",
  storageBucket: "linkedin-f4cc0.appspot.com",
  messagingSenderId: "380630663518",
  appId: "1:380630663518:web:fe693cbc1a64029be8cfcf",
  measurementId: "G-3L4NZ6MQMB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth= firebase.auth();

export { db , auth};
