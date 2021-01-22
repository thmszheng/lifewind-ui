import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getNewsStories as getNewsStoriesAction } from "../../../actions";
import { getNewsStories } from "../../../selectors";
import NewsStories from "./newsStories";

const mapStateToProps = (state) => ({
  newsStories: getNewsStories(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getNewsStoriesAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewsStories);
