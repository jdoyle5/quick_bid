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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});



export default class Home extends Component {

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
      <ScrollView >
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
