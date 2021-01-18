import Navbar from './navbar';
import { connect } from "react-redux";
import { getSavedLogin } from "../../selectors";


const mapStateToProps = state => ({
  savedLogin: getSavedLogin(state)
});

export default connect(mapStateToProps)(Navbar);
