import { SAVE_NEWS_STORIES, SAVE_NEWS_STORY } from "../actions/types";
import { saveNewsStories, saveNewsStory } from "../selectors";

const newsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SAVE_NEWS_STORIES:
      return saveNewsStories(state, payload);
    case SAVE_NEWS_STORY:
      return saveNewsStory(state, payload);
    default:
      return state;
  }
};

export default newsReducer;
