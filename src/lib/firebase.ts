import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDdKPV_weNHVEmkMqHAiUzgrdt2tMrHsc4",
  authDomain: "the-quarry-62df9.firebaseapp.com",
  projectId: "the-quarry-62df9",
  storageBucket: "the-quarry-62df9.firebasestorage.app",
  messagingSenderId: "646940350313",
  appId: "1:646940350313:web:519b5b13d6e1b26f700ff8",
  measurementId: "G-43NRCGLKQ3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);