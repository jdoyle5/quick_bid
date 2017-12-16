import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator } from "react-navigation";
import AuthContainer from './OAuth/auth_container';
import HomeContainer from './Home/home_container';
import AuctionWindowContainer from './Auction/auction_window_container';

import configureStore from '../store/store';

const store = configureStore({});

const Home = props => {
  return (
      <HomeContainer navigation={props.navigation} />
  );
};

const AuctionWindow = props => {
  return (
      <AuctionWindowContainer navigation={props.navigation} />
  );
};

const TabNav = TabNavigator ({
  // if (store.getState().session.currentUser) {
  //   return TabNav;
  // } else {
  //   return Login;
  // }
  // Login: { screen: Authentication, title: "Login" },
  Home: { screen: Home },
  Live: {screen: AuctionWindow, title: "Live"},
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  tabicon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

export default TabNav;
