import React, { Component } from 'react';
import { View, TouchableOpacity, DatePickerAndroid } from 'react-native';
import { connect } from 'react-redux';

import Lia from '../../components/Lia';
import Footer from '../../components/Footer';
import styles from './style';
import { BtnWhite, BtnBlue } from '../../components/buttons';
import { setDate, setTime } from '../../actions/AppAction';

class DaySelect extends Component {

  handleDate = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        const date = new Date(year, month, day);
        const format = { year: 'numeric', month: 'long', day: 'numeric' };
        await this.props.setDate(date.toLocaleDateString('pt-BR', format));
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }

  handleTime = async time => {
    await this.props.setTime(time);
    this.props.navigation.navigate('QrCode');
  }

  render() {
    const instructions = `Certo, ${this.props.exam} ${'\n'}Que dia você quer agendar?`;

    return (
      <View style={styles.container} >

        <Lia instructions={instructions} />

        <View style={styles.btnWrapper} >
          <TouchableOpacity onPress={() => this.handleDate()} >
            <BtnWhite text={this.props.date} />          
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <TouchableOpacity onPress={() => this.handleTime('09:00')} >
              <BtnBlue text='09:00' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleTime('10:00')} >
              <BtnBlue text='10:00' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleTime('11:00')} >
              <BtnBlue text='11:00' />
            </TouchableOpacity>
          </View>

        </View>
        
        <Footer />

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    date: state.AppReducer.date,
    time: state.AppReducer.time,
    exam: state.AppReducer.exam,
  });
};

const mapDispatchToProps = {
  setDate,
  setTime,
};

export default connect(mapStateToProps, { ...mapDispatchToProps })(DaySelect);
