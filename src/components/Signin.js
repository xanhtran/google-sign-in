import React from 'react';
import { authentication } from '../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import '../App.css';

export default function Signin () {
        const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((re) => {
          console.log(re);
        })
        .catch((err) => {
          console.log(err);
        })
      }
        return (
            <div className="App">
                <button onClick={signInWithGoogle}>
                    Sign in with Google
                </button>
            </div>
        );
    }


