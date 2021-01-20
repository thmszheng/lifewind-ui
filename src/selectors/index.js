import { createSelector } from "reselect";

const savedLoginSelector = (state) => state.account || {};
const blogStoriesSelector = (state) => state.blog.blogStories || [];
const userStoriesSelector = (state) => state.blog.userStories || [];


export const saveLogin = (state, payload) => ({
  ...state,
  ...payload
});

export const getSavedLogin = createSelector(
  savedLoginSelector,
  (object) => object
);

export const loadBlogStories = (state, payload) => ({
  ...state,
  blogStories: payload
});

export const getBlogStories = createSelector(
  blogStoriesSelector,
  array => array
);

export const loadUserStories = (state, payload) => ({
  ...state,
  userStories: payload
});

export const getUserStories = createSelector(
  userStoriesSelector,
  array => array
);
