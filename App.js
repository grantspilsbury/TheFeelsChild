import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Alert,
  Slider,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.onPressHappyButton = this.onPressHappyButton.bind(this);
    this.onPressHappySadButton = this.onPressHappySadButton.bind(this);
    this.onPressSadButton = this.onPressSadButton.bind(this);
  }

  onPressHappyButton() {
    this.handleButtonPress(2);
  }

  onPressHappySadButton() {
    this.handleButtonPress(1);
  }

  onPressSadButton() {
    this.handleButtonPress(0);
  }

  // onEmergencyPress() {
  //   Alert.alert(
  //     'Alert Title',
  //     'My Alert Msg',
  //     [
  //       {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
  //       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
  //       {text: 'OK', onPress: () => console.log('OK Pressed')},
  //     ],
  //     { cancelable: false }
  //   )
  // }

  handleButtonPress(val){
      fetch('http://localhost:3000/users/5a4fd8202ab6f472bff97c03/scores', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        score: val
      }),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          How are you feeling today?
        </Text>
        <View style={styles.rowContainer}>
          <TouchableHighlight
            underlayColor="rgba(232,244,248,0.5)"
            style={styles.button}
            onPress={this.onPressHappyButton}>
            <Image
              style={styles.image}
              source={require('./images/happy2.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="rgba(232,244,248,0.5)"
            style={styles.button}
            onPress={this.onPressHappySadButton}>
            <Image
              style={styles.image}
              source={require('./images/happysad2.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="rgba(232,244,248,0.5)"
            style={styles.button}
            onPress={this.onPressSadButton}>
            <Image
              style={styles.image}
              source={require('./images/sad2.png')}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 40,
    color: '#fff'
  },
  rowContainer: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginBottom: 10
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 60
  },
  image: {
    width: 120,
    height: 120,
    paddingBottom: 20,
    resizeMode: Image.resizeMode.contain,
  }
});
