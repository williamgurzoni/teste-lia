import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Lia from '../../components/Lia';
import Footer from '../../components/Footer';
import styles from './style';
import { BtnBlueBig, BtnGreenBig } from '../../components/buttons';

class WelcomeScreen extends Component {
  handleStartBtn = () => {
    this.props.navigation.navigate('Action');
  }

  render() {
    const instructions = `Seja bem vindo, ${this.props.name} ${'\n'}O que deseja fazer?`;

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

const mapStateToProps = (state) => {
  return ({
    name: state.AppReducer.name,
  });
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, { ...mapDispatchToProps })(WelcomeScreen);
