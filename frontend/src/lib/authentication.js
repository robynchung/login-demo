import { auth } from "../lib/firebase";

let initialState = {
  errorMessage: "",
  isSuccess: false,
  user: {}
};

export async function signUp(email, password) {
  const response = await auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
    initialState = {
      errorMessage: error.message
    };

    throw initialState;
  });

  if (response?.additionalUserInfo?.isNewUser) {
    initialState = {
      user: response.user
    };

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
