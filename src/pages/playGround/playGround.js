import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
import { auth } from "../../config/firebase"
import Login from "../../components/login/login";

export default function PlayGround() {
    return (
        <div className="loginHandler-container">
            <Login/>
        </div>
    )
}