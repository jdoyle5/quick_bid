import React, {Component} from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { receiveItems } from '../../actions/item_actions';

export default class HomeIndexItem extends Component {
  render() {
    const { item } = this.props;
    let image = {uri: item.img_url};

    return (
        <View>
          <Image source={image} style={{width: '100%', height: 200}}/>
        </View>
    );
  }
}
