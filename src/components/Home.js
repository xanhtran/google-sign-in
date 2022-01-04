import { signOut } from 'firebase/auth';
import React from 'react';
import '../App.css';
import { authentication } from '../firebase-config';

export default function Home () {
       const logOut = () => {
            signOut(authentication)
            .then((re) => {
                console.log(re);
            })
            .catch((err) => {
                console.log(err);
            })
       }
        return (
            <div className="App">
                <h1>Home page</h1>
                <button onClick={logOut} >
                    Logout
                </button>
            </div>
        );
    }


