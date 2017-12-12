import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import { StackNavigator } from "react-navigation";
import AuthContainer from './OAuth/auth_container';

const App = (props) => {
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      < AuthContainer />
      <Button
           onPress={() => navigate('SecondScreen')}
           title="Go to Second Screen"
         />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});

export default App;
