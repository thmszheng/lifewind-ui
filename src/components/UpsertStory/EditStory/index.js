import { connect } from "react-redux";
import {
  publishStory as onSubmit,
  editStory as editStoryAction,
} from "../../../actions";
import { reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { getSavedLogin, getStory } from "../../../selectors";
import EditStory from "./editStory";

const FORM_NAME = "EDIT_STORY";

const mapStateToProps = (state) => ({
  savedLogin: getSavedLogin(state),
  story: getStory(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onSubmit,
      editStoryAction,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: FORM_NAME })(EditStory));
