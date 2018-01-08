import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image
} from 'react-native';
import { StackNavigator, TabNavigator } from "react-navigation";
import SplashContainer from './splash_container.js';

const Splash = props => {
  return (
    <SplashContainer navigation={props.navigation} />
  );
};

const StackNav = StackNavigator ({
  splash: {
    screen: Splash,
    navigationOptions: ({ navigation }) => ({
      title: "quickBid",
    })
  }
});

export default StackNav;
