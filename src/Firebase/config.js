// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCqYyfw57bT9Q-OvazpBvLPwZEcPRO44bw",
  authDomain: "coder-16930-reactjs-gr.firebaseapp.com",
  projectId: "coder-16930-reactjs-gr",
  storageBucket: "coder-16930-reactjs-gr.appspot.com",
  messagingSenderId: "745484004652",
  appId: "1:745484004652:web:dfaa37366ca7ca7144d089"
});

export const db = getFirestore(firebaseApp);