import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import PublishStory from "./components/UpsertStory/PublishStory";
import EditStory from "./components/UpsertStory/EditStory";
import BlogStories from "./components/Blog/BlogStories";
import NewsStories from "./components/Blog/NewsStories";
import UserStories from "./components/Blog/UserStories";
import Story from "./components/Blog/ViewStory/UserStory";
import NewsStory from "./components/Blog/ViewStory/NewsStory";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { Switch, Route, Redirect } from "react-router-dom";
import { Auth } from "aws-amplify";
import { saveLogin } from "./actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function App({ saveLogin }) {
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      const {
        username: userId,
        attributes: { preferred_username: username },
      } = await Auth.currentUserInfo();
      saveLogin({ userId, username });
    } catch (error) {}
  }

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/publish" component={PublishStory} />
        <Route path="/blog" component={BlogStories} />
        <Route path="/news" exact component={NewsStories} />
        <Route path="/user/:id" component={UserStories} />
        <Route path="/story/:id" component={Story} />
        <Route path="/news/:id" component={NewsStory} />
        <Route path="/edit/:id" component={EditStory} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      <Loader />
    </div>
  );
}

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ saveLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
