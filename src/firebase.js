// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "fir-chat-app-723f4.firebaseapp.com",
  projectId: "fir-chat-app-723f4",
  storageBucket: "fir-chat-app-723f4.appspot.com",
  messagingSenderId: "195151585759",
  appId: "1:195151585759:web:56239689569655ce07a46a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);