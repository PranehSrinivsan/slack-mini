import React, { useState } from "react";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { ChatMessage } from "./ChatMessage";
import firebase from 'firebase/compat/app';
import { firestore,auth } from "./App";

firebase.initializeApp({
  apiKey: "AIzaSyBEAR5Vs-2oWQNXdkNaJjKC12vuB_nwhAY",
  authDomain: "slackmini-fe8a6.firebaseapp.com",
  projectId: "slackmini-fe8a6",
  storageBucket: "slackmini-fe8a6.appspot.com", 
  messagingSenderId: "587511431245",
  appId: "1:587511431245:web:d769f49dabfe749b949c04",
  measurementId: "G-YJLWFPNQN8"
})


export function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formvalue,setFormvalue] = useState('');

  const sendmessage=async(e)=>
    {
      e.preventDefault();
      const{uid,photoURL,displayName}=auth.currentUser;

      await messagesRef.add({
        text:formvalue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp() ,
        uid,
        photoURL,
        name: displayName
      })

      setFormvalue('');
    }

  return (
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <div>
      <form onSubmit={sendmessage} >
          <input value={formvalue} onChange={(e)=>setFormvalue(e.target.value)} />
          <button type="submit" className="fas fa-comment-dots" />
        </form>
      </div>
    </>
  );
}
