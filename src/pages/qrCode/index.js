import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Lia from '../../components/Lia';
import Footer from '../../components/Footer';
import styles from './style';

const instructions = 'Tudo certo com seu agendamento :)';

class QrCode extends Component {
  handleStartBtn = () => {
    this.props.navigation.navigate('Map');
  }

  render() {
    const { exam, date, time, lab } = this.props;
    const cardText = `Exame ${exam} \nDia ${date} às ${time} \n${lab}`;
    return (
      <View style={styles.container} >

        <Lia instructions={instructions} customStyle={{ color: '#EB4B66' }} />

        <View style={styles.msgWrapper} >
          <View style={styles.logoLab}><Text>Logo Lab</Text></View>
          <Text style={styles.card}>{ cardText }</Text>
          <View style={styles.qrcode}><Text>Qr Code</Text></View>
        </View>
        
        <Footer />

      </View>
    );
  }
}

const mapStateToProps = (state) => ({
    date: state.AppReducer.date,
    time: state.AppReducer.time,
    exam: state.AppReducer.exam,
    lab: state.AppReducer.lab,
});
  
const mapDispatchToProps = {};

export default connect(mapStateToProps, { ...mapDispatchToProps })(QrCode);
