import React, {Component} from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { receiveItems } from '../../actions/item_actions';

export default class HomeIndexItem extends Component {
  render() {
    const { item } = this.props;
    let image = {uri: item.img_url};

    return (
        <View style={styles.content}>
          <Text style={styles.header}>{item.title}</Text>
        <Image source={image} style={{width: '55%', height: 200, marginBottom: 40}}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'black',
  },
  avatar: {
    margin: 20,
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  text: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30,
  },
});
