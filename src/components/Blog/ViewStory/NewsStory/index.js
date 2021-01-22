import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getNewsStory } from "../../../../selectors";
import NewsStory from "./newsStory";
import { getNewsStory as getNewsStoryAction } from "../../../../actions";

const mapStateToProps = (state) => ({
  newsStory: getNewsStory(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getNewsStoryAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewsStory);
