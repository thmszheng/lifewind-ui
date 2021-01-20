import { fork, all } from "redux-saga/effects";
import account from "./account";
import publishStory from './publishStory'
import sagaRouter from './sagaRouter';

const sagas = [...account, publishStory, sagaRouter];

export default function* root() {
  yield all(sagas.map((saga) => fork(saga)));
}
