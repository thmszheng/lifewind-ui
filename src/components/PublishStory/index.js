import { connect } from "react-redux";
import { publishStory as onSubmit } from "../../actions";
import { reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import PublishStory from './publishStory';


const FORM_NAME = "NEW_STORY";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onSubmit,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: FORM_NAME })(PublishStory));
