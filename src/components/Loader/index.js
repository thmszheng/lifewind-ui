import Loader from "./loader";
import { connect } from "react-redux";
import { getLoading } from "../../selectors";

const mapStateToProps = (state) => ({
  loading: getLoading(state),
});

export default connect(mapStateToProps)(Loader);
