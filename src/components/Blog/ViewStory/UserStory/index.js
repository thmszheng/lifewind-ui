import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStory } from "../../../../selectors";
import UserStory from "./userStory";
import { getStory as getStoryAction } from "../../../../actions";

const mapStateToProps = (state) => ({
  story: getStory(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getStoryAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserStory);
