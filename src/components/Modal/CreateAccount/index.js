import { connect } from "react-redux";
import {
  createAccount as onSubmit,
  createAccountSuccess,
} from "../../../actions";
import { bindActionCreators } from "redux";
import { reduxForm } from "redux-form";
import CreateAccount from "./createAccount";
import { formValueSelector } from "redux-form";

const FORM_NAME = "CREATE_ACCOUNT";

const selector = formValueSelector(FORM_NAME);

const mapStateToProps = (state) => ({
  username: selector(state, "username"),
  email: selector(state, "email"),
  password: selector(state, "password"),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onSubmit,
      createAccountSuccess,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: FORM_NAME })(CreateAccount));
