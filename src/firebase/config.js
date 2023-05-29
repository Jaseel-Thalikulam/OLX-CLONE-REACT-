import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyDQ-5oPB30xb7Hlyvpn2rG5MtFyZi2SBxA",
  authDomain: "olx-demo-f1f52.firebaseapp.com",
  projectId: "olx-demo-f1f52",
  storageBucket: "olx-demo-f1f52.appspot.com",
  messagingSenderId: "85597428817",
  appId: "1:85597428817:web:e9aa434c5128420e562c70",
  measurementId: "G-Q831F8SD21"
};

export const FireBase = firebase.initializeApp(firebaseConfig)