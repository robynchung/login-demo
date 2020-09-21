import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIpfzxhaEiBFch_fdtmhfsZ0Cabdx2Ulo",
  authDomain: "login-demo-e10ea.firebaseapp.com",
  databaseURL: "https://login-demo-e10ea.firebaseio.com",
  projectId: "login-demo-e10ea",
  storageBucket: "login-demo-e10ea.appspot.com",
  messagingSenderId: "886397074137",
  appId: "1:886397074137:web:962830e71a890245985cc8",
  measurementId: "G-X75T625WPM"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
