import HomePage from "./homepage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getNewsStories } from "../../selectors";
import { getNewsStories as getNewsStoriesAction } from "../../actions";

const mapStateToProps = (state) => ({
  newsStories: getNewsStories(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getNewsStoriesAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
