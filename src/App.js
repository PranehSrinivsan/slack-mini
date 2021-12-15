import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useAuthState} from 'react-firebase-hooks/auth';
import { ChatRoom } from "./ChatRoom";
import { SignIn } from "./SignIn";
import './App.css'

firebase.initializeApp({
  apiKey: "AIzaSyBEAR5Vs-2oWQNXdkNaJjKC12vuB_nwhAY",
  authDomain: "slackmini-fe8a6.firebaseapp.com",
  projectId: "slackmini-fe8a6",
  storageBucket: "slackmini-fe8a6.appspot.com", 
  messagingSenderId: "587511431245",
  appId: "1:587511431245:web:d769f49dabfe749b949c04",
  measurementId: "G-YJLWFPNQN8"
})

export const auth = firebase.auth();
export const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <header className="App-header">
        SLACK MINI
      </header>
      <section>
        {user ? <ChatRoom/>:<SignIn/> }
      </section>
    </div>
  );
}

export default App;
