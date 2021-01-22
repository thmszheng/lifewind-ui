import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBlogStories as getBlogStoriesAction } from "../../../actions";
import { getBlogStories } from "../../../selectors";
import BlogStories from "./blogStories.jsx";

const mapStateToProps = (state) => ({
  blogStories: getBlogStories(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getBlogStoriesAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BlogStories);
