import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyC3h22yt2CQC9d2GXhxLkD5yas26z8Blbs',
  authDomain: 'jin-airbnb.firebaseapp.com',
  projectId: 'jin-airbnb',
  storageBucket: 'jin-airbnb.appspot.com',
  messagingSenderId: '693004778363',
  appId: '1:693004778363:web:15586425e83605b8575bde',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
