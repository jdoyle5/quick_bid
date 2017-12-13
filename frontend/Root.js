import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import { TabNavigator } from "react-navigation";
import HomeContainer from "./components/Home/home_container";


import configureStore from './store/store';

const store = configureStore({});

console.log(store.getState());


const Authentication = props => {
  return (
    <Provider store={store}>
      <App navigation={props.navigation} />
    </Provider>
  );
};

Authentication.navigationOptions = {
  title: "Login"
};

const Home = props => {
  return (
    <Provider store={store}>
      <HomeContainer navigation={props.navigation} />
    </Provider>
  );
};

const Root = TabNavigator({
  Home: { screen: Home },
  Login: { screen: Authentication, title: "Login" }
});

export default Root;
