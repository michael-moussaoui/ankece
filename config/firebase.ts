// firebaseConfig.js ou firebase.ts

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCinhl5AnDYeCHzQOMYJjjgDbwjVI9BgAk",
    authDomain: "ankece-16bb5.firebaseapp.com",
    projectId: "ankece-16bb5",
    storageBucket: "ankece-16bb5.firebasestorage.app",
    messagingSenderId: "792769475070",
    appId: "1:792769475070:web:569d96a2ca2d9bf21750af",
    measurementId: "G-WF489R9H40"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Exportation des services pour une utilisation dans votre application
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);