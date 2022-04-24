import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA6rSuULI3FOuurt6oqhEGf5JUxagmGfv0',
  authDomain: 'johanshop-57372.firebaseapp.com',
  projectId: 'johanshop-57372',
  storageBucket: 'johanshop-57372.appspot.com',
  messagingSenderId: '1039077067914',
  appId: '1:1039077067914:web:4fa0e8efa5913f7449f173',
  measurementId: 'G-5R7VFPJ8H7',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
