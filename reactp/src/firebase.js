import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm0YMygEGfrSPRDw738OvQn3jlO-17UQM",
  authDomain: "reactdatabase-33048.firebaseapp.com",
  projectId: "reactdatabase-33048",
  storageBucket: "reactdatabase-33048.appspot.com",
  messagingSenderId: "653075827164",
  appId: "1:653075827164:web:a7ff1b6e96ecaee267a719"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);