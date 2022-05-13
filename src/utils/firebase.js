import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDpP-5Ww5F1RNiQcFLRk_oV1MUCZv6ept8",
  authDomain: "gelato-f3b4a.firebaseapp.com",
  databaseURL: "https://gelato-f3b4a-default-rtdb.firebaseio.com",
  projectId: "gelato-f3b4a",
  storageBucket: "gelato-f3b4a.appspot.com",
  messagingSenderId: "721639717594",
  appId: "1:721639717594:web:646aa4b4227c756081c3e3"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase()

export const auth = getAuth(app);
export default firebase;