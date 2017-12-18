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
      if (this.props.currentUser.key === this.props.item.highest_bidder_key && this.props.item.highest_bid !== 0) {
        this.setState({ currentItem: this.props.item});
        this.setState({ isModalVisible: true });
      }
      this.setState({secondsRemaining: 59});
    }
  }


  render() {
    return (

      <View >
        <Text style={styles.titleContainer}> Time Left: {this.state.secondsRemaining} </Text>
        <View style={styles.modalContainer}>
          <Modal
            isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.setState({ isModalVisible: false, label: "you lost", currentItem: this.props.item })}>
            <View style={styles.winningContainer}>
              <Text style={styles.winningText}>Congratulations! You won {this.state.currentItem.title} for ${this.state.currentItem.highest_bid}. Play again.</Text>
            </View>
          </Modal>
        </View>
      </View>
    );
  }

}


var styles = StyleSheet.create({
    titleContainer : {
      color: 'red',
      fontSize: 25,
      fontWeight: 'bold',
      padding: 10,
    },
    modalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20
    },
    winningContainer: {
      backgroundColor: '#29648A',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    winningText: {
      color: "white",
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    }
});
