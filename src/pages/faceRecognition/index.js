import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FaceRecognition extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Welcome');
    }, 10000);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text> FaceRecognition {'\n '}react-native-camera</Text>
      </View>
    );
  }
}
