import { connect } from "react-redux";
import { getBlogStories } from "../../../selectors";
import BlogStories from './blogStories.jsx';

const mapStateToProps = state => ({
  blogStories: getBlogStories(state)
});

export default connect(mapStateToProps)(BlogStories);
