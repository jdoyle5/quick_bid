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
    };
    this.onReceivedItem = this.onReceivedItem.bind(this);
    this.socket = ioClient('https://quick-bid.herokuapp.com/');
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
        <View style={styles.container}>
          <Text>Our products were so popular, they've sold out!</Text>
          <Text>Please check back soon. We are working hard to get more items to you!</Text>
        </View>
      );
    }
    return (

      <View style={styles.container}>
        <Text style={styles.titleContainer}>{item.title}</Text>
        <Timer item={item} currentUser={this.props.currentUser}/>
        <Text style={styles.bidText}>Highest Bid: ${item.highest_bid}</Text>
        <Image source={image} style={{width: '90%', height: 350, marginBottom: 30, borderRadius: 10}}/>
        <View style={styles.buttonContain}>
          <TouchableOpacity onPress={this.increaseBid}>
            <View style={styles.bidContain}>
              <Text style={styles.bidButton}>
                ${this.nextBid()}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    titleContainer : {
      color: 'steelblue',
      fontSize: 25,
      fontWeight: 'bold',
      padding: 10

    },
    currentBid: {
      flex    : 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    bidText: {
      color: 'steelblue',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20
    },
    bidButton: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    bidContain: {
      padding: 10,
      backgroundColor: 'orange',
      borderRadius: 10,
      width: 120,
      alignItems: 'center'
    }
});

