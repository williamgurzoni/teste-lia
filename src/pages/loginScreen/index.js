import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Lia from '../../components/Lia';
import Footer from '../../components/Footer';
import styles from './style';
import { BtnRed, BtnWhite } from '../../components/buttons';

const instructions = `Olá, eu sou a Lia. ${'\n'}Estou aqui para cuidar da sua saúde.`;

export default class LoginScreen extends Component {
  handleStartBtn = () => {
    this.props.navigation.navigate('LoginMethod');
  }

  render() {
    return (
      <View style={styles.container} >

        <Lia instructions={instructions} />

        <View style={styles.btnWrapper} >
          <BtnRed text='Sou novo por aqui' />
          <TouchableOpacity onPress={() => this.handleStartBtn()} >
            <BtnWhite text='Entrar' />
          </TouchableOpacity>
        </View>
        
        <Footer />

      </View>
    );
  }
}
