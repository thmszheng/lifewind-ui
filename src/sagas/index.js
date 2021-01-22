import { fork, all } from "redux-saga/effects";
import account from "./account";
// import sagaRouter from "./sagaRouter";
import publishStory from "./publishStory";
import getBlogStories from "./getBlogStories";
import getUserStories from "./getUserStories";
import getNewsStories from "./getNewsStories";
import getNewsStory from "./getNewsStory";
import getBlogStory from "./getBlogStory";
import getEditStory from "./getEditStory";
import deleteStory from "./deleteStory";

const sagas = [
  ...account,
  // sagaRouter,
  publishStory,
  getBlogStories,
  getUserStories,
  getNewsStories,
  getNewsStory,
  getBlogStory,
  getEditStory,
  deleteStory,
];

export default function* root() {
  yield all(sagas.map((saga) => fork(saga)));
}
