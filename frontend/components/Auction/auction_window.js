import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import ioClient from 'socket.io-client';


export default class AuctionWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // current_bid: this.props.item.highest_bid,
    };

    this.onReceivedItem = this.onReceivedItem.bind(this);
    this.socket = ioClient('http://localhost:3000');
    this.socket.emit('Client connected!');
    this.socket.on('auction item', this.onReceivedItem);

    this.increaseBid = this.increaseBid.bind(this);
    this.bid = 100;
  }


  onReceivedItem(item) {
    console.log("current auction item");
    console.log(item);
    this.props.receiveAuctionItem(item);
    // this.setState({current_item: item});
  }

  increaseBid(bid) {
    const currentUserKey = this.props.currentUser.key;
    const auctionItemId = this.props.item._id;
    // console.log(auctionItemId);
    // const bidAmount = this.incrementBid();
    this.socket.emit('Increase bid', currentUserKey, this.incrementBid(), auctionItemId);
  }

  incrementBid() {
    this.bid += 100;
    return this.bid;
  }

  render() {
    if (!this.props.item.title) {
      return null;
    }
    return (
      <View style={{flex: 1, backgroundColor: "orange", paddingTop: 20}}>
        <Text>Highest Bid</Text>
        <Text>{this.props.item.highest_bid}</Text>
        <Text>{this.props.item.title}</Text>
        <TouchableOpacity onPress={this.increaseBid}>
          <Text>
            Increase Bid Now!!!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

}
AuctionWindow.navigationOptions = {
  title: 'Live',
};
