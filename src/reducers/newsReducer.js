import { SAVE_NEWS_STORIES, SAVE_NEWS_STORY } from "../actions/types";
import { saveNewsStories, saveNewsStory } from "../selectors";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SAVE_NEWS_STORIES:
      return saveNewsStories(state, payload);
    case SAVE_NEWS_STORY:
      return saveNewsStory(state, payload);
    default:
      return state;
  }
};
