
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {

    apiKey: "AIzaSyDN3GBmHq9D6AldZBmjBf8jAhgrgMYPwgo",
  
    authDomain: "vue-blog-system-81643.firebaseapp.com",
  
    projectId: "vue-blog-system-81643",
  
    storageBucket: "vue-blog-system-81643.appspot.com",
  
    messagingSenderId: "851234361981",
  
    appId: "1:851234361981:web:6a004ba9f7fb90e1b55714"
  
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();

let timestamp = serverTimestamp();
export {db,timestamp,auth};
