import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDswH84U2j6ASTKfEQ9OccGtj1cYJsnQOA",
    authDomain: "learn-firebase-d7816.firebaseapp.com",
    projectId: "learn-firebase-d7816",
    storageBucket: "learn-firebase-d7816.appspot.com",
    messagingSenderId: "974387327545",
    appId: "1:974387327545:web:f4d46b1cf5f5497eab53e8",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
