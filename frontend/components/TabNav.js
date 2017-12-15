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

// const App = (props) => {
//   // const { navigate } = props.navigation;
//
//   return (
//     <View style={styles.container}>
//       < AuctionWindowContainer />
//       < AuthContainer />
//       < HomeContainer />
//     </View>
//   );
// };
const Home = props => {
  return (
      <HomeContainer navigation={props.navigation} />
  );
};
// const Authentication = props => {
//   return (
//       <AuthContainer navigation={props.navigation} />
//   );
// };
const AuctionWindow = props => {
  return (
      <AuctionWindowContainer navigation={props.navigation} />
  );
};

// const TabNav = TabNavigator({
//   Home: { screen: Home },
//   AuctionWindow: {screen: AuctionWindow, title: "Live"}
// });
//
// const Login = StackNavigator({
//   Login: { screen: Authentication, title: "Login" },
// });


const TabNav = TabNavigator ({
  // if (store.getState().session.currentUser) {
  //   return TabNav;
  // } else {
  //   return Login;
  // }
  // Login: { screen: Authentication, title: "Login" },
  Home: { screen: Home },
  Live: {screen: AuctionWindow, title: "Live"}
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});

export default TabNav;
