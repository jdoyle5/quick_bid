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
import receiveItems from '../../actions/item_actions';
import HomeIndexItem from './home_index_item';


var styles = StyleSheet.create({
  container: {
    flex            : 1,
    backgroundColor : '#7ea4b3',
    paddingTop      : 30
  },
  tabicon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 26,
    width: 26
  }

});

import ioClient from 'socket.io-client';


export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestItems();
  }


  render() {
    const {items} = this.props.items;

    if (!items) {
      return null;
    }
    console.log(items);
    console.log("about to render");

    return (
      <ScrollView style={styles.container}>
          {items.map((item, i) => (
            <HomeIndexItem key={i} item={item} />
          ))}
      </ScrollView>
    );
  }
}
