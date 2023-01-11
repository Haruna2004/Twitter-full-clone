import firebase from "firebase/compat/app";
import db from "firebase/compat/firestore";
import auth from "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7_Dlb9pcd5--4vPEt7iZ5Ph24xZFnyhw",
  authDomain: "twitterv2-43c82.firebaseapp.com",
  projectId: "twitterv2-43c82",
  storageBucket: "twitterv2-43c82.appspot.com",
  messagingSenderId: "79131309310",
  appId: "1:79131309310:web:c5c4fad30571266343e1af",
  measurementId: "G-EPH0CG32BD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
