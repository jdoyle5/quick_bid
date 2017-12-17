import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
  Image
} from 'react-native';
import ioClient from 'socket.io-client';
import Timer from './timer';
import Modal from 'react-native-modal';


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
    this.nextBid = this.nextBid.bind(this);

  }

  // winnerModal() {
  //   const { item } = this.props;
  //   <View>
  //     <Text>You won! {item.title} is yours at {item.highest_bid}!</Text>
  //   </View>;
  // }
  //
  // loserModal() {
  //   const { item } = this.props;
  //   <View>
  //     <Text>You lost! Play again</Text>
  //   </View>;
  // }



  onReceivedItem(item) {
    console.log("current auction item");
    console.log(item);
    this.props.receiveAuctionItem(item);
  }

  increaseBid(bid) {
    const currentUserKey = this.props.currentUser.key;
    const auctionItemId = this.props.item._id;
    this.socket.emit('Increase bid', currentUserKey, this.nextBid(), auctionItemId);
  }

  nextBid() {
    if ((Math.round((this.props.item.msrp * 0.1) / 10) * 10) <= 5) {
      return (5 + this.props.item.highest_bid);
    } else {
      return (Math.round((this.props.item.msrp * 0.1) / 10) * 10 + this.props.item.highest_bid);
    }
  }

  render() {
    const { item } = this.props;
    let image = {uri: item.img_url};
    if (!this.props.item.title) {
      return (
        <View style={{flex: 1, backgroundColor: "orange", paddingTop: 20}}>
          <Text>Our products were so popular, they've sold out!</Text>
          <Text>Please check back soon. We are working hard to get more items to you!</Text>
        </View>
      );
    }
    return (
      <View style={{flex: 1, backgroundColor: "orange", paddingTop: 20}}>

        <Text>Highest Bid</Text>
        <Text>{item.highest_bid}</Text>
        <Text>{item.title}</Text>
        <Image source={image} style={{width: '100%', height: 400, marginBottom: 40}}/>
        <TouchableOpacity onPress={this.increaseBid}>
          <Text>
            Increase Your Bid
            {this.nextBid()}
          </Text>
        </TouchableOpacity>
        <Timer item={item} currentUser={this.props.currentUser}/>


      </View>
    );
  }

}
