import { LOAD_BLOG_STORIES, LOAD_USER_STORIES } from "../actions/types";
import { loadBlogStories, loadUserStories } from "../selectors";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case LOAD_BLOG_STORIES:
      return loadBlogStories(state, payload);
    case LOAD_USER_STORIES:
      return loadUserStories(state, payload);
    default:
      return state;
  }
};
