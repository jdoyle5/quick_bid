import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Animated
} from 'react-native';
import TabNav from '../TabNav';

export default class Splash extends Component {
  render(){
    return (
      <View style={styles.container}>
        <TabNav/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
