import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const FirebaseConfig = {
    apiKey: "AIzaSyAxbc27jl_JSisGc0sdHnZPj1eAezd7_20",
    authDomain: "form-otp-job.firebaseapp.com",
    projectId: "form-otp-job",
    storageBucket: "form-otp-job.appspot.com",
    messagingSenderId: "567183223845",
    appId: "1:567183223845:web:a19c765fc618d5e99b23cc"
  };
  
  // Initialize Firebase
  const app =firebase.initializeApp(FirebaseConfig);
  // const app = initializeApp(firebaseConfig);
  
  // export default app

  export default app
  