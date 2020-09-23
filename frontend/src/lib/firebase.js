import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "../config";
const { apiKey, appId, authDomain, databaseURL, measurementId, messagingSenderId, projectId, storageBucket } = config.firebase;

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
