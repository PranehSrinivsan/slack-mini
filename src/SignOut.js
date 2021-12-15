import React from "react";
import { auth } from "./App";

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => { auth.signOut()}}>Sign Out</button>
  );
}
