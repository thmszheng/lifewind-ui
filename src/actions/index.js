import {
  LOGIN,
  LOGOUT,
  SAVE_LOGIN,
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  PUBLISH_STORY,
  GET_BLOG_STORIES,
  GET_USER_STORIES,
  GET_NEWS_STORIES,
  SAVE_BLOG_STORIES,
  SAVE_USER_STORIES,
  SAVE_NEWS_STORIES,
  SAVE_NEWS_STORY,
  GET_NEWS_STORY,
  GET_STORY,
  SAVE_STORY,
  EDIT_STORY,
  DELETE_STORY,
  SET_LOADING,
} from "./types";

const createAction = (type) => (payload) => ({
  type,
  payload,
});

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const saveLogin = createAction(SAVE_LOGIN);
export const createAccount = createAction(CREATE_ACCOUNT);
export const createAccountSuccess = createAction(CREATE_ACCOUNT_SUCCESS);
export const publishStory = createAction(PUBLISH_STORY);
export const getBlogStories = createAction(GET_BLOG_STORIES);
export const saveBlogStories = createAction(SAVE_BLOG_STORIES);
export const getUserStories = createAction(GET_USER_STORIES);
export const saveUserStories = createAction(SAVE_USER_STORIES);
export const getStory = createAction(GET_STORY);
export const getNewsStory = createAction(GET_NEWS_STORY);
export const getNewsStories = createAction(GET_NEWS_STORIES);
export const saveNewsStory = createAction(SAVE_NEWS_STORY);
export const saveNewsStories = createAction(SAVE_NEWS_STORIES);
export const saveStory = createAction(SAVE_STORY);
export const editStory = createAction(EDIT_STORY);
export const deleteStory = createAction(DELETE_STORY);
export const setLoading = createAction(SET_LOADING);
