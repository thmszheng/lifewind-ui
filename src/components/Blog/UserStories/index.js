import { connect } from "react-redux";
import { getSavedLogin, getUserStories} from "../../../selectors";
import UserStories from './userStories';

const mapStateToProps = state => ({
  userStories: getUserStories(state),
  savedLogin: getSavedLogin(state),
});

export default connect(mapStateToProps)(UserStories);
