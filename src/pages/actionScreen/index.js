import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Lia from '../../components/Lia';
import Footer from '../../components/Footer';
import styles from './style';
import { BtnGray, BtnGreen, BtnWhite } from '../../components/buttons';

class WelcomeScreen extends Component {
  handleStartBtn = () => {
    this.props.navigation.navigate('Map');
  }

  render() {

    const instructions = `Certo ${this.props.name} ${'\n'}Será por convênio ou particular?`;

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

const mapStateToProps = (state) => {
  return ({
    name: state.AppReducer.name,
  });
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, { ...mapDispatchToProps })(WelcomeScreen);
