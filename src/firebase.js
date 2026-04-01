import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_k3tgvfIh3smcZ7jAYsxcUESSSngF8nE",
  authDomain: "jewelry-app-4f68c.firebaseapp.com",
  projectId: "jewelry-app-4f68c",
  storageBucket: "jewelry-app-4f68c.firebasestorage.app",
  messagingSenderId: "216803521966",
  appId: "1:216803521966:web:e3056405202635119a843f",
  measurementId: "G-LCBK5BX7K5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();