import {
  SAVE_BLOG_STORIES,
  SAVE_USER_STORIES,
  SAVE_STORY,
} from "../actions/types";
import { saveBlogStories, saveUserStories, saveStory } from "../selectors";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SAVE_BLOG_STORIES:
      return saveBlogStories(state, payload);
    case SAVE_USER_STORIES:
      return saveUserStories(state, payload);
    case SAVE_STORY:
      return saveStory(state, payload);
    default:
      return state;
  }
};
