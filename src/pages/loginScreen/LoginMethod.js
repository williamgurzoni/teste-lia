import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Lia from '../../components/Lia';
import Footer from '../../components/Footer';
import styles from './style';
import { BtnRed, BtnWhite } from '../../components/buttons';

const instructions = 'Por favor escolha se deseja entrar por ' +
'reconhecimento facial ou pelo seu CPF?';

export default class LoginMethod extends Component {
  handleFaceBtn = () => {
    this.props.navigation.navigate('FaceRecognition');
  }

  render() {
    return (
      <View style={styles.container} >

        <Lia instructions={instructions} />

        <View style={styles.btnWrapper} >
          <TouchableOpacity onPress={() => this.handleFaceBtn()} >
            <BtnRed text='Pela minha face' />
          </TouchableOpacity>
          
          <BtnWhite text='Entrar com seu CPF' />
        </View>
        
        <Footer />

      </View>
    );
  }
}
