import React from "react";
import firebase from 'firebase/compat/app';
import { auth } from "./App";

export function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}> Sign in with Google </button>
  );

}
