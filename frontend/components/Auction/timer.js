import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import ioClient from 'socket.io-client';
import Modal from 'react-native-modal';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsRemaining: 59 - (new Date().getSeconds()),
      isModalVisible: false,
      label: "You lost",
      currentItem: this.props.item
    };
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    this.cycle();
  }

  cycle() {
    setInterval(this.countDown, 1000);
  }

  countDown() {
    if (this.state.secondsRemaining > 1) {
      this.setState({secondsRemaining: 59 - (new Date().getSeconds())});
    } else {
      if (this.props.currentUser.key === this.state.currentItem.highest_bidder_key) {
        this.setState({ label: "You won"});
      }
      this.setState({ isModalVisible: true });
      this.setState({secondsRemaining: 59});
    }
  }

  // showModal() {
  //   const { item } = this.props;
  //   if (this.props.currentUser.key === this.props.item.highest_bidder_key) {
  //     <View>
  //       <Text>You won! {item.title} is yours at {item.highest_bid}!</Text>
  //     </View>;
  //   } else {
  //     <View>
  //       <Text>You lost! Play again</Text>
  //     </View>;
  //   }
    // console.log("modal here");
  // }


  render() {
    return (
      <View>
        <Text>{this.state.secondsRemaining}</Text>

      <Modal
        isVisible={this.state.isModalVisible}
        onBackdropPress={() => this.setState({ isModalVisible: false, label: "you lost" })}
      >
      <View>


          <Text style={{color:"red"}}>{this.state.label} {this.state.currentItem.title} at ${this.state.currentItem.highest_bid}! Play again.</Text>

      </View>

      </Modal>
    </View>
    );
  }

}
