import React from 'react';
import {auth} from '../config/FirebaseConfig'
import {createUserWithEmailAndPassword} from "firebase/auth"


export const Auth = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const signIn = async() => {
        await createUserWithEmailAndPassword(auth, email, password)
    };

    return (
        <div className="bg-gray-500 m-4 border-2 rounded-lg p-4">
            <input placeholder="Email..." 
            onChange={(e) => setEmail(e.target.value)}
            />
            <input placeholder="Password..." 
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>Sign in</button>
        </div>
    )
}