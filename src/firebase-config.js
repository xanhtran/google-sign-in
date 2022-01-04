import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAsZeJG8D9vOh_7_jJxk2yvnN9IofEgdF0",
    authDomain: "sign-in-89713.firebaseapp.com",
    projectId: "sign-in-89713",
    storageBucket: "sign-in-89713.appspot.com",
    messagingSenderId: "160160618302",
    appId: "1:160160618302:web:2e96c8a59d8b5e71a23e6f",
    measurementId: "G-NXWYS7XCB1"
}

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);