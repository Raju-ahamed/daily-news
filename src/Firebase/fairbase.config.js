// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpbPiYki2gUAZHZxshT8QFg8nC_0QTyPA",
    authDomain: "thedragonnews-32aa9.firebaseapp.com",
    projectId: "thedragonnews-32aa9",
    storageBucket: "thedragonnews-32aa9.firebasestorage.app",
    messagingSenderId: "72341376368",
    appId: "1:72341376368:web:0f5d5b26a572493e3813b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;