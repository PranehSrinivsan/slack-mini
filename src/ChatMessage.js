import React from "react";
import { auth } from "./App";
export function ChatMessage(props) {
  const { text, uid ,photoURL ,name} = props.message;
  const messageClass = uid === auth.currentUser.uid? 'sent':'received';// checks for user side
  return(
    <div className={`message ${messageClass}`}>
        <img src={photoURL}/>{name}<br/>
        {text}
    </div>
  )
}
