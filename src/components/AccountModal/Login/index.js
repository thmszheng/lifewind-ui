import { connect } from 'react-redux';
import { login as onSubmit } from "../../../actions";
import { bindActionCreators } from "redux";
import { reduxForm } from "redux-form";
import Login from './login';

const FORM_NAME = 'LOGIN';

const mapStateToProps = state => ({
  testState: 1
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: FORM_NAME })(Login))
