import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCffPtsbbdPWb4HwsAgHIpbwKkisG78pro",
  authDomain: "firstfirebase-2a05a.firebaseapp.com",
  projectId: "firstfirebase-2a05a",
  storageBucket: "firstfirebase-2a05a.firebasestorage.app",
  messagingSenderId: "991299001640",
  appId: "1:991299001640:web:212fb9efc72d37df74441d",
  measurementId: "G-26DHYLBQFD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
