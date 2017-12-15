// export default class Auth extends Component {
//
// }
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
// import indexItem from 'home_index_item';
import receiveItems from '../../actions/item_actions';
import HomeIndexItem from './home_index_item';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
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

Home.navigationOptions = {
  title: 'Home',
};
