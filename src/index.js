import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import getStore from './getStore';
import Amplify from 'aws-amplify';

const store = getStore();

const config = {
  Auth: {
    mandatorySignIn: false,
    region: 'us-east-1',
    userPoolId: 'us-east-1_qSDsAWtdE',
    userPoolWebClientId: '2sict4aldgjo0q5qottr2297kg'
  }
};

Amplify.configure(config);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
