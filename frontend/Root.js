import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Provider } from 'react-redux';
// import Auth from './components/OAuth/auth';
import App from './components/App';


import configureStore from './store/store';

const store = configureStore({});

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
