import { put, takeLeading } from "redux-saga/effects";
import { CREATE_ACCOUNT, LOGIN } from "../actions/types";
import {
  saveLogin
} from "../actions";
import { Auth } from 'aws-amplify';

function* createAccount({ payload: { username: preferred_username, email, password }}) {
  try {
    const result = yield Auth.signUp({
      username: email,
      password,
      attributes: {
        preferred_username
      }
    });
    console.log(result);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

function* login({ payload: { email, password }}) {
  try {
    const { attributes: { preferred_username }} = yield Auth.signIn(email, password);
    console.log(preferred_username);
    const tokens = yield Auth.currentSession();
    console.log(tokens);
    const userId = tokens.getIdToken().payload['cognito:username'];
    console.log(userId);

    yield put(saveLogin({ userId, username: preferred_username }));
  } catch (error) {
    console.log('error logging in:', error);
  }
}

function* takeCreateAccount() {
  yield takeLeading(CREATE_ACCOUNT, createAccount);
}

function* takeLogin() {
  yield takeLeading(LOGIN, login);
}

export default [
  takeCreateAccount,
  takeLogin
]
