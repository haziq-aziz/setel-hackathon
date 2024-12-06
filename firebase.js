// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, push } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwCEBUiqYjEDEi8k0ZmJ3Ybm7Bybqpepo",
  authDomain: "hackathon-setel-1.firebaseapp.com",
  databaseURL: "https://hackathon-setel-1-default-rtdb.firebaseio.com",
  projectId: "hackathon-setel-1",
  storageBucket: "hackathon-setel-1.firebasestorage.app",
  messagingSenderId: "516161539221",
  appId: "1:516161539221:web:54c38de1b503d94cc5df9c",
  measurementId: "G-RRX178L00R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const db = getFirestore(app);

export { app, db, database };