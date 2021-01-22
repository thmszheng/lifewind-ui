import { createSelector } from "reselect";

const savedLoginSelector = (state) => state.account || {};
const storySelector = (state) => state.blog.story || {};
const blogStoriesSelector = (state) => state.blog.blogStories || [];
const userStoriesSelector = (state) => state.blog.userStories || [];
const newsStorySelector = (state) => state.news.newsStory || {};
const newsStoriesSelector = (state) => state.news.newsStories || [];
const loadingSelector = (state) => state.loading || false;

export const saveLogin = (state, payload) => ({
  ...state,
  ...payload,
});

export const getSavedLogin = createSelector(
  savedLoginSelector,
  (object) => object
);

export const saveBlogStories = (state, payload) => ({
  ...state,
  blogStories: payload,
});

export const getBlogStories = createSelector(
  blogStoriesSelector,
  (array) => array
);

export const saveUserStories = (state, payload) => ({
  ...state,
  userStories: payload,
});

export const getUserStories = createSelector(
  userStoriesSelector,
  (array) => array
);

export const saveStory = (state, payload) => ({
  ...state,
  story: payload,
});

export const saveNewsStories = (state, payload) => ({
  ...state,
  newsStories: payload,
});

export const saveNewsStory = (state, payload) => ({
  ...state,
  newsStory: payload,
});

export const getNewsStories = createSelector(
  newsStoriesSelector,
  (array) => array
);

export const getNewsStory = createSelector(
  newsStorySelector,
  (object) => object
);

export const getStory = createSelector(storySelector, (object) => object);

export const setLoading = (state, payload) => payload;

export const getLoading = createSelector(loadingSelector, (boolean) => boolean);
