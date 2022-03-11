import firebase from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZ74iVX8j2bstwI_4gqi9O1ILDTn-BLP0",
  authDomain: "notebook-1f92c.firebaseapp.com",
  projectId: "notebook-1f92c",
  storageBucket: "notebook-1f92c.appspot.com",
  messagingSenderId: "491687757141",
  appId: "1:491687757141:web:981ad1e375b39f42039bdc",
  measurementId: "G-PYZC20YGL3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithRedirect(auth, provider);