import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image
} from 'react-native';
import { StackNavigator, TabNavigator } from "react-navigation";
import AuthContainer from './OAuth/auth_container';
import HomeContainer from './Home/home_container';
import AuctionWindowContainer from './Auction/auction_window_container';
import FontAwesome, { Icons } from 'react-native-fontawesome';

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
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => (
        <Text style={{margin: 10, fontSize: 25, textAlign: 'center'}}>
          <FontAwesome>{Icons.home}</FontAwesome>
        </Text>
      ),
      title: "Home"
    })
  },
  Live: {
    screen: AuctionWindow,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => (
        <Text style={{margin: 10, fontSize: 25, textAlign: 'center'}}>
          <FontAwesome>{Icons.tags}</FontAwesome>
        </Text>
      ),
      title: "Live"
    }),
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  tabicon: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'column',
    height: 26,
    width: 26
  }
});

export default TabNav;

// <Image
//   source={require('../images/arrow_up.png')}
//   style={[styles.tabicon]}
// />
