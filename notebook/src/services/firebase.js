import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = (async() => {
  return signInWithPopup(auth, provider)
    .then((res) => {
      const uid = res.user.uid;
      return uid;
    }).catch((err) => {
      console.log(err)
    })
});

export const signOutWithGoogle = (() => {
  signOut(auth).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
});