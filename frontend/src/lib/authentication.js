import firebase from "firebase/app";
import cookies from "js-cookie";

import { auth } from "../lib/firebase";
import constants from "../constants";

let initialState = {
  errorMessage: "",
  isSuccess: false,
  user: {}
};

export async function signUpWithEmail(email, password) {
  const response = await auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
    initialState = { ...initialState, errorMessage: error.message, isSuccess: false };
  });

  if (response?.additionalUserInfo?.isNewUser) {
    initialState = { ...initialState, isSuccess: response.additionalUserInfo.isNewUser, user: response.user };

    auth.currentUser.getIdToken().then(token => {
      cookies.set(constants.token, token);
    });
  }

  return initialState;
}

export async function signIn(email, password) {
  const response = await auth.signInWithEmailAndPassword(email, password).catch(function (error) {
    initialState = { ...initialState, errorMessage: error.message, isSuccess: false };
  });

  if (response?.user) {
    initialState = { ...initialState, errorMessage: "", user: response?.user, isSuccess: true };
  }

  auth.currentUser.getIdToken().then(token => {
    cookies.set(constants.token, token);
  });

  return initialState;
}

export async function signOut() {
  const response = await auth
    .signOut()
    .then(function () {
      cookies.remove(constants.token);
      initialState = { ...initialState, isSuccess: true, user: {} };

      return initialState;
    })
    .catch(function (error) {
      initialState = { ...initialState, errorMessage: error.message, isSuccess: false };

      return initialState;
    });

  return response;
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
      console.log(result);
      let token = result.credential.accessToken;
      cookies.set(constants.token, token);

      let user = result.user;
      initialState = { ...initialState, isSuccess: true, user };

      return initialState;
    })
    .catch(function (error) {
      console.log();
      let errorMessage = error.message;
      initialState = { ...initialState, errorMessage, isSuccess: false };

      return initialState;
    });
}
