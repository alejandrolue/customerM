// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQbzkMbriBCcQM1vDcRmKMB2U0SfZyAq4",
    authDomain: "customermanagement-42699.firebaseapp.com",
    projectId: "customermanagement-42699",
    storageBucket: "customermanagement-42699.appspot.com",
    messagingSenderId: "1039858631992",
    appId: "1:1039858631992:web:75b3088feba1e2a195edcd",
    measurementId: "G-S50ETSFSZ1"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)