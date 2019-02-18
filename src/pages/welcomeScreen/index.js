import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Lia from '../../components/Lia';
import Footer from '../../components/Footer';
import styles from './style';
import { BtnBlueBig, BtnGreenBig } from '../../components/buttons';

const instructions = `Seja bem vindo, Edgar ${'\n'}O que deseja fazer?`;

export default class WelcomeScreen extends Component {
  handleStartBtn = () => {
    this.props.navigation.navigate('Action');
  }

  render() {
    return (
      <View style={styles.container} >

        <Lia instructions={instructions} />

        <View style={styles.btnWrapper} >
          <TouchableOpacity onPress={() => this.handleStartBtn()} >
            <BtnGreenBig text='Agendar Atendimento' />
          </TouchableOpacity>
          <BtnBlueBig text='Consultar meus exames' />
        </View>
        
        <Footer />

      </View>
    );
  }
}
