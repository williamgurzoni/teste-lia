import React from 'react';
import { View, Image, Text } from 'react-native';

const heart = require('../../assets/heart.png');

const Lia = ({
  instructions
}) => (
    <View>
      <Image source={heart} style={{ width: 100, height: 83, alignSelf: 'flex-start' }} />
      <Text style={{ fontSize: 27, fontWeight: 'bold', marginTop: 25 }}>
        <Text>{instructions}</Text>
      </Text>
    </View>
);

export default Lia;
