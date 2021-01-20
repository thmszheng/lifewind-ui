import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import PublishStory from './components/PublishStory';
import BlogStories from './components/Blog/BlogStories';
import UserStories from './components/Blog/UserStories';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Auth } from 'aws-amplify';
import history from './history';
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
      const { username: userId, attributes: { preferred_username: username }} = await Auth.currentUserInfo();
      saveLogin({ userId, username });
    } catch (error) {}
  }

  return (
    <div className="App">
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/publish' component={PublishStory} />
          <Route path='/blog' component={BlogStories} />
          <Route path='/user/:id' component={UserStories} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => bindActionCreators({ saveLogin }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

