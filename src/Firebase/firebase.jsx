// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTH,
  projectId:process.env.REACT_APP_ID,
  storageBucket:process.env.REACT_APP_BUCKET,
  messagingSenderId:process.env.REACT_APP_SENDER,
  appId:process.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)
const storage = getStorage(app); 
const auth = getAuth(app)

export { db, storage, auth}