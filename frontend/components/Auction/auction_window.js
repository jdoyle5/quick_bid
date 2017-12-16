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
    // this.bid = 100;
    this.nextBid = this.nextBid.bind(this);
  }


  onReceivedItem(item) {
    console.log("current auction item");
    console.log(item);
    this.props.receiveAuctionItem(item);
  }

  increaseBid(bid) {
    const currentUserKey = this.props.currentUser.key;
    const auctionItemId = this.props.item._id;
    // console.log(auctionItemId);
    // const bidAmount = this.incrementBid();
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
        <View style={styles.container}>
          <Text>Our products were so popular, they've sold out!</Text>
          <Text>Please check back soon. We are working hard to get more items to you!</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.titleContainer}>{item.title}</Text>
        <Timer/>
      <Text style={styles.bidText}>Highest Bid: ${item.highest_bid}</Text>
        <Image source={image} style={{width: '90%', height: 300, marginBottom: 40, borderRadius: 10}}/>
        <TouchableOpacity onPress={this.increaseBid}>
          <Text style={styles.bidButton}>
            ${this.nextBid()}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

}

var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: "#7ea4b3"
    },
    titleContainer : {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20

    },
    currentBid: {
      flex    : 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    bidText: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
      padding: 20
    },
    bidButton: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
      padding: 20,
      backgroundColor: 'steelblue',
      borderRadius: 10
    }
});
