import React, {useState} from "react"
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../config/firebase";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login In</button>
        </div>
    )
}