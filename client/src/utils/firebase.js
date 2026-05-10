
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-based-interview-68d99.firebaseapp.com",
  projectId: "ai-based-interview-68d99",
  storageBucket: "ai-based-interview-68d99.firebasestorage.app",
  messagingSenderId: "857459524270",
  appId: "1:857459524270:web:b2bef944af879ae8d1233f",
  measurementId: "G-6ZBS6PJYPV"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}