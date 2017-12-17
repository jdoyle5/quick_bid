import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import ioClient from 'socket.io-client';


export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsRemaining: 59 - (new Date().getSeconds())
    };
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    this.cycle();
  }

  cycle() {
    setInterval(this.countDown, 1000);
  }

  countDown() {
    if (this.state.secondsRemaining > 0) {
      this.setState({secondsRemaining: 59 - (new Date().getSeconds())});
    } else {
      this.setState({secondsRemaining: 59});
    }
  }


  render() {
    return (
      <View >
        <Text style={styles.titleContainer}> Time Left: {this.state.secondsRemaining} </Text>
      </View>
    );
  }

}


var styles = StyleSheet.create({
    titleContainer : {
      color: 'red',
      fontSize: 25,
      fontWeight: 'bold',
      padding: 10,
    }
});
