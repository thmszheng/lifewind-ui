import { fork, all } from "redux-saga/effects";
import account from "./account";

const sagas = [...account];

export default function* root() {
  yield all(sagas.map((saga) => fork(saga)));
}
