import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';

export const BtnRed = (props) => (
  <View style={styles.btnRed} >
    <Text style={styles.txtWhite} >{props.text}</Text>
  </View>
);

export const BtnWhite = (props) => (
  <View style={styles.btnWhite} >
    <Text style={styles.txtGrey} >{props.text}</Text>
  </View>
);

export const BtnGreenBig = (props) => (
  <View style={styles.btnGreenBig} >
    <Text style={styles.txtGrey} >{props.text}</Text>
  </View>
);

export const BtnBlueBig = (props) => (
  <View style={styles.btnBlueBig} >
    <Text style={styles.txtGrey} >{props.text}</Text>
  </View>
);

export const BtnGreen = (props) => (
  <View style={styles.btnGreen} >
    <Text style={styles.txtGrey} >{props.text}</Text>
  </View>
);

export const BtnGray = (props) => (
  <View style={styles.btnGray} >
    <Text style={styles.txtGrey} >{props.text}</Text>
  </View>
);
