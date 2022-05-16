import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJl393xbfxugK41tWuVh--Dm9-6-gI4Xs",
  authDomain: "crwn-db-b1d8c.firebaseapp.com",
  projectId: "crwn-db-b1d8c",
  storageBucket: "crwn-db-b1d8c.appspot.com",
  messagingSenderId: "867714479500",
  appId: "1:867714479500:web:b56c7016cdffa8525752a9",
  measurementId: "G-MXLP9JD395",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
