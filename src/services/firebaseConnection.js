import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHDxjqQKW2LVUQEd_syz-S1GhbRoUW3q8",
  authDomain: "sistema-de-chamados-ea7e4.firebaseapp.com",
  projectId: "sistema-de-chamados-ea7e4",
  storageBucket: "sistema-de-chamados-ea7e4.appspot.com",
  messagingSenderId: "970854133248",
  appId: "1:970854133248:web:c90e455406d0f8d19ef2e5",
  measurementId: "G-LX69CZ9L1X",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
