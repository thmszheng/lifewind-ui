import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSavedLogin, getUserStories } from "../../../selectors";
import UserStories from "./userStories";
import {
  getUserStories as getUserStoriesAction,
  deleteStory,
} from "../../../actions";

const mapStateToProps = (state) => ({
  userStories: getUserStories(state),
  savedLogin: getSavedLogin(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getUserStoriesAction, deleteStory }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserStories);
