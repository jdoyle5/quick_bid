import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import { StackNavigator } from "react-navigation";
import SecondScreen from "./components/Test/test";


import configureStore from './store/store';

const store = configureStore({});

console.log(store.getState());


const reactNavigationSample = props => {
  return (
    <Provider store={store}>
      <App navigation={props.navigation} />
    </Provider>
  );
};

reactNavigationSample.navigationOptions = {
  title: "Login"
};

const Root = StackNavigator({
  Home: { screen: reactNavigationSample },
  SecondScreen: { screen: SecondScreen, title: "Second Screen" }
});

export default Root;
