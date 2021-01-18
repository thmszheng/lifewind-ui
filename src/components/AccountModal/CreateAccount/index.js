import { connect } from "react-redux";
import { createAccount as onSubmit } from "../../../actions";
import { bindActionCreators } from "redux";
import { reduxForm } from "redux-form";
import CreateAccount from "./createAccount";

const FORM_NAME = "CREATE_ACCOUNT";

const mapStateToProps = (state) => ({
  testState: 1,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onSubmit,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: FORM_NAME })(CreateAccount));
