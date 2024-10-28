import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { getStorage, FirebaseStorage } from 'firebase/storage';

let isFirebaseInitialized = false;

const FirebaseApp = {
  apiKey: "AIzaSyB5F3boiTDQ5rjyItFpRbqm2xLDrifdjvA",
  authDomain: "bagstore-pro.firebaseapp.com",
  projectId: "bagstore-pro",
  storageBucket: "bagstore-pro.appspot.com",
  messagingSenderId: "59874518049",
  appId: "1:59874518049:web:83034c8c6da16d8aa62f60"
};

let database: Firestore;
let auth: Auth;
let storage: FirebaseStorage;

const initializeFirebase = () => {
  if (!isFirebaseInitialized) {
    const app = initializeApp(FirebaseApp);
    database = getFirestore(app);
    auth = getAuth(app);
    storage = getStorage(app);
    isFirebaseInitialized = true;
  }
};

initializeFirebase();

export { auth, database, storage };
