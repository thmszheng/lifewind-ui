import { connect } from "react-redux";
import { login as onSubmit, saveLogin } from "../../../actions";
import { bindActionCreators } from "redux";
import { reduxForm } from "redux-form";
import Login from "./login";
import { formValueSelector } from "redux-form";

const FORM_NAME = "LOGIN";

const selector = formValueSelector(FORM_NAME);

const mapStateToProps = (state) => ({
  email: selector(state, "email"),
  password: selector(state, "password"),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onSubmit,
      saveLogin,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: FORM_NAME })(Login));
