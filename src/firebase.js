import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtpubUtlXn4szBazTAIkfuu20UWldCaQ8",
  authDomain: "clone-429a5.firebaseapp.com",
  projectId: "clone-429a5",
  storageBucket: "clone-429a5.appspot.com",
  messagingSenderId: "1076697309296",
  appId: "1:1076697309296:web:a23aec414f3b45f262d4b5",
  measurementId: "G-BJX9YRZ7T1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
