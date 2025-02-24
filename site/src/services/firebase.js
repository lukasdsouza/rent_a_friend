981/Documents/site/src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAk4S2q6xlvhxE-5wY32K-BOtN1zoBeDiY",
  authDomain: "oender-6df25.firebaseapp.com",
  projectId: "oender-6df25",
  storageBucket: "oender-6df25.appspot.com",
  messagingSenderId: "926010024849",
  appId: "1:926010024849:web:79214a13bb756f92730263"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, firestore, storage };