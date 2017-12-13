import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import ioClient from 'socket.io-client';


export default class Bidding extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  this.socket = ioClient('http://localhost:3000');
  // this.socket.on('connected', this.socketTest);
  this.socket.emit('Client connected!');
  }

  // socketTest() {
  //   this.socket.emit('Client connected!');
  // }

  render() {
    return (
      <Text>Yooooo</Text>
    );
  }

}
