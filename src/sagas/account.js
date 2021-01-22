import { put, takeLeading } from "redux-saga/effects";
import { LOGOUT } from "../actions/types";
import { saveLogin } from "../actions";
import { Auth } from "aws-amplify";

// function* createAccount({
//   payload: { username: preferred_username, email, password },
// }) {
//   try {
//     yield Auth.signUp({
//       username: email,
//       password,
//       attributes: {
//         preferred_username,
//       },
//     });
//   } catch (error) {
//     console.log("error signing up:", error);
//   }
// }
//
// function* login({ payload: { email, password } }) {
//   try {
//     const {
//       attributes: { preferred_username },
//     } = yield Auth.signIn(email, password);
//
//     const tokens = yield Auth.currentSession();
//
//     const userId = tokens.getIdToken().payload["cognito:username"];
//
//     yield put(saveLogin({ userId, username: preferred_username }));
//   } catch (error) {
//     console.log("error logging in:", error);
//   }
// }

function* logout() {
  try {
    yield Auth.signOut();
    yield put(saveLogin({ userId: null, username: null }));
  } catch (error) {
    console.log("error logging out", error);
  }
}

// function* takeCreateAccount() {
//   yield takeLeading(CREATE_ACCOUNT, createAccount);
// }
//
// function* takeLogin() {
//   yield takeLeading(LOGIN, login);
// }

function* takeLogout() {
  yield takeLeading(LOGOUT, logout);
}

export default takeLogout;
