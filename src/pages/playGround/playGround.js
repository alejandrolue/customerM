import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
import { auth } from "../../config/firebase"

export default function PlayGround() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = () => {
        signInWithEmailAndPassword(auth, email, password).then(r => console.log(r.user))
        console.log("clicked")
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                const uid = user.uid;
                console.log("User is signed in with UID:", uid);
            } else {
                // User is signed out
                console.log("No user is signed in");
            }
        });
    }


    return (
        <div className="loginHandler-container">
            <input onChange={(e) => setEmail(e.target.value)}/>
            <input onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => loginHandler()}/>
        </div>
    )
}