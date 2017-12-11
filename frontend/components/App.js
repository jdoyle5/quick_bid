import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import AuthContainer from './OAuth/auth_container';

const App = () => (
  <View style={styles.container}>
    < AuthContainer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});

export default App;
