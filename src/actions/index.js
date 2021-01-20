import { LOGIN, SAVE_LOGIN, CREATE_ACCOUNT, PUBLISH_STORY, LOAD_BLOG_STORIES, LOAD_USER_STORIES } from "./types";

const createAction = (type) => (payload) => ({
  type,
  payload,
});

export const login = createAction(LOGIN);
export const saveLogin = createAction(SAVE_LOGIN);
export const createAccount = createAction(CREATE_ACCOUNT);
export const publishStory = createAction(PUBLISH_STORY);
export const loadBlogStories = createAction(LOAD_BLOG_STORIES);
export const loadUserStories = createAction(LOAD_USER_STORIES);
