import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWS23HSSVRsn0TPcFGiFqJuLBHiWpGn64",
  authDomain: "react-auth-755cf.firebaseapp.com",
  projectId: "react-auth-755cf",
  storageBucket: "react-auth-755cf.appspot.com",
  messagingSenderId: "81421155023",
  appId: "1:81421155023:web:36c5b479cae2315d8695ba"
};

const app = firebase.initializeApp(firebaseConfig);
export default app;