// hdrr
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZiQhElmQIV4i-dyU6ojMAfweCOn4Z59E",
  authDomain: "hdrr-d9026.firebaseapp.com",
  projectId: "hdrr-d9026",
  storageBucket: "hdrr-d9026.appspot.com",
  messagingSenderId: "108098455765",
  appId: "1:108098455765:web:a3cc6479d7780ed509ba5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()