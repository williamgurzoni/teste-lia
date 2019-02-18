import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Lia from '../../components/Lia';
import Footer from '../../components/Footer';
import styles from './style';
import { BtnGray, BtnGreen, BtnWhite } from '../../components/buttons';

const instructions = `Certo, THS ${'\n'}Que dia você quer agendar?`;

export default class DaySelect extends Component {
  handleStartBtn = () => {
    this.props.navigation.navigate('Map');
  }

  render() {
    return (
      <View style={styles.container} >

        <Lia instructions={instructions} />

        <View style={styles.btnWrapper} >
          <BtnGray text='Particular' />
          <TouchableOpacity onPress={() => this.handleStartBtn()} >
            <BtnGreen text='Usar a Unimed' />
          </TouchableOpacity>
          <BtnWhite text='Seu convênio mudou?' />
        </View>
        
        <Footer />

      </View>
    );
  }
}
