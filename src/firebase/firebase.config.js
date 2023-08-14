// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOoYTX6fj_ovY3OQ8FlGxtbmyJxPm_rsw",
  authDomain: "toy-firebase-auth.firebaseapp.com",
  projectId: "toy-firebase-auth",
  storageBucket: "toy-firebase-auth.appspot.com",
  messagingSenderId: "574204979268",
  appId: "1:574204979268:web:409209c2f907ce69817411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;