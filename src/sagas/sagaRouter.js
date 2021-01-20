import { router } from '@curiosity26/redux-saga-router';
import { put, fork } from "redux-saga/effects";
import { loadBlogStories as loadBlogStoriesAction, loadUserStories as loadUserStoriesAction } from "../actions";
import axios from 'axios';
import history from '../history';

const routes = {
  '/blog': function* loadBlogStories() {
    console.log('blog');
    const result = yield axios({
      method: 'get',
      url: 'http://localhost:8080/api/v1/stories'
    }).then(response => response.data);
    yield put(loadBlogStoriesAction(result));
  },
  '/user/:id': function* loadUserStories({ id }) {
    const result = yield axios({
      method: 'get',
      url: `http://localhost:8080/api/v1/users/${id}`
    }).then(response => response.data);
    yield put(loadUserStoriesAction(result));
  }
};

export default function*() {
  yield fork(router, history, routes);
};
