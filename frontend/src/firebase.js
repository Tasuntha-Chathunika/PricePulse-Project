import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ඔයාගේ Firebase Config එක
const firebaseConfig = {
    apiKey: "AIzaSyCJS0_B450XCXSpABDkHJ2VlomigSqWJlQ",
    authDomain: "pricepulse-c7df8.firebaseapp.com",
    projectId: "pricepulse-c7df8",
    storageBucket: "pricepulse-c7df8.firebasestorage.app",
    messagingSenderId: "46336949663",
    appId: "1:46336949663:web:59ce80e5c89dbec33511aa"
};

// Firebase පටන් ගැනීම
const app = initializeApp(firebaseConfig);

// Authentication සඳහා අවශ්‍ය දේවල්
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Login Page එකට ඕන දේවල් එළියට යැවීම
export { auth, googleProvider };