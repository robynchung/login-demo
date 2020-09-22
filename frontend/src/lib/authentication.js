import firebase from "firebase/app";
import { auth } from "../lib/firebase";
import constants from "../constants";

let initialState = {
  errorMessage: "",
  isSuccess: false,
  user: {}
};

export async function signUp(email, password) {
  const response = await auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
    initialState = { ...initialState, errorMessage: error.message, isSuccess: false };

    throw initialState;
  });

  if (response?.additionalUserInfo?.isNewUser) {
    initialState = { ...initialState, isSuccess: response.additionalUserInfo.isNewUser, user: response.user };

    return initialState;
  }
}

export function signIn(email, password) {
  auth.signInWithEmailAndPassword(email, password).catch(function (err) {
    // Handle errors
  });
}

export function signOut() {
  // Sign out user
  auth.signOut().catch(function (err) {
    // Handle errors
  });
}

export function socialSignIn(type) {
  const { facebook, google } = constants.socialType;
  let provider = null;

  switch (type) {
    case facebook:
      provider = new firebase.auth.FacebookAuthProvider();
      break;

    case google:
      provider = new firebase.auth.GoogleAuthProvider();
      break;

    default:
      break;
  }

  auth
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}
