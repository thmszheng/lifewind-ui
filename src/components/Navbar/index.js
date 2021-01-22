import Navbar from "./navbar";
import { connect } from "react-redux";
import { getSavedLogin } from "../../selectors";
import { logout } from "../../actions";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => ({
  savedLogin: getSavedLogin(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
