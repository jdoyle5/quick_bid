import React, { Component } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Platform,
  Text,
  View,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafariView from 'react-native-safari-view';
import HomeContainer from '../Home/home_container';
// import TabNav from '../TabNav';
import StackNav from '../Splash/StackNav';

// const Home = props => {
//   return (
//       <HomeContainer navigation={props.navigation} />
//   );
// };


export default class Auth extends Component {

  state = {
    user: undefined, // user has not logged in yet
  };

  // Set up Linking
  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  };

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this.handleOpenURL);
  };

  // added in max

  // added again
  _navigateTo = (routeName: string) => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
  }

  handleOpenURL = ({ url }) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    const user = JSON.parse(decodeURI(user_string))
    this.setState({
      // Decode the user string and parse it into JSON
      // user: JSON.parse(decodeURI(user_string))
      user
    });

    // APIUtil.postUser(user);
    // console.log("This is the user in auth.js");
    // console.log(user);
    // console.log(this.props);
    // let crUr = this.props.createUser;
    // this.props.createUser(user);

    this.props.receiveCurrentUser(user);

    postUser = this.props.postUser;

    this.props.postUser(user);

    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  };

  demoUser = () => {
    const demo_user = {
      "key": "1234567890",
      "name": "Demo User",
      "avatar": "www.quick_bid_awesome.com"
    }

    this.props.receiveCurrentUser(demo_user);

    this.setState({user: demo_user});

    postUser = this.props.postUser;

    this.props.postUser(demo_user);
  }

  // Handle Login with Facebook button tap
  loginWithFacebook = () => this.openURL('https://quick-bid.herokuapp.com/auth/facebook');

  // Handle Login with Google button tap
  loginWithGoogle = () => this.openURL('https://quick-bid.herokuapp.com/auth/google');

  // Open URL in a browser
  openURL = (url) => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: url,
        fromBottom: true,
      });
    }
    // Or Linking.openURL on Android
    else {
      Linking.openURL(url);
    }
  };

  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <View style={styles.container}>
        { user
          ?
            <View style={styles.container}>
              <StackNav/>
            </View>
          :
          <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.header}>
                InstaBid
              </Text>
              <Text style={styles.text}>
                A new auction bargain every minute! {'\n'}
              </Text>
              <View style={styles.avatar}>
                <Icon name="hourglass-start" size={100} color="#7ea4b3" />
              </View>
            </View>
            <View style={styles.demoButton}>
              <Button
                style={styles.demoText}
                title="Demo"
                color="white"
                onPress={this.demoUser}>Demo Login
              </Button>
            </View>
            <View style={styles.buttons}>
              <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
                onPress={this.loginWithFacebook}
                {...iconStyles}
                >
                  Login with Facebook
                </Icon.Button>
                <Icon.Button
                  name="google"
                  backgroundColor="#DD4B39"
                  onPress={this.loginWithGoogle}
                  {...iconStyles}
                  >
                    Or with Google
                </Icon.Button>
              </View>
            </View>
        }
        {/* Login buttons */}
      </View>
    );
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 70,
    textAlign: 'center',
    margin: 10,
    color: 'steelblue'
  },
  text: {
    textAlign: 'center',
    color: 'steelblue',
    marginBottom: 5,
    fontSize: 20
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30,
  },
  demoButton: {
    margin: 37,
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#7ea4b3',
    borderRadius: 10
    // height: 150,


  },
  demoText: {
    borderRadius: 10,
    color: 'white',
    width: 50,
    fontSize: 30,
    fontWeight: 'bold'
  }
});
