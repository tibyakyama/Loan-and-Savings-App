import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVe1JHIikaXMbHgEK6zU4k7oTeSGSIAqw",
  authDomain: "loan-system-de27a.firebaseapp.com",
  projectId: "loan-system-de27a",
  storageBucket: "loan-system-de27a.appspot.com",
  messagingSenderId: "604970346152",
  appId: "1:604970346152:web:9f6761e699a4bd90a1449d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);