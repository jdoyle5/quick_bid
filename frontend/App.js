// import React, { Component } from 'react';
// import {
//   View
// } from 'react-native';


import configureStore from './store/store';

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
