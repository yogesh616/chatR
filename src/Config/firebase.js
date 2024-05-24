// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwP6vXvJOioAsr4bBFHjJOLbQPV9Gt8mU",
  authDomain: "chat-170e9.firebaseapp.com",
  databaseURL: "https://chat-170e9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-170e9",
  storageBucket: "chat-170e9.appspot.com",
  messagingSenderId: "115843952336",
  appId: "1:115843952336:web:d7508888dd49e0a0cab8d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()