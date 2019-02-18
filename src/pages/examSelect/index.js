import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { connect } from 'react-redux';

import Lia from '../../components/Lia';
import Footer from '../../components/Footer';
import styles from './style';
import { setExam } from '../../actions/AppAction';

class ExamSelect extends Component {

  handleSelect = async (exam) => {
    if (exam !== '') {
      await this.props.setExam(exam);
      this.props.navigation.navigate('Day');
    }
  }

  render() {
    const instructions = `Ok ${this.props.name}, que exames você precisa agendar?`;
    return (
      <View style={styles.container} >

        <Lia instructions={instructions} />

        <View style={styles.btnWrapper} >
          <Picker
            selectedValue={this.props.exam}
            style={{ height: 50, width: '100%' }}
            onValueChange={(item) => this.handleSelect(item)}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="TS" value="TS" />
            <Picker.Item label="TSH" value="TSH" />
            <Picker.Item label="Colesterol" value="Colesterol" />
            <Picker.Item label="Hemograma" value="Hemograma" />
          </Picker>
        </View>
        
        <Footer />

      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return ({
    name: state.AppReducer.name,
    lab: state.AppReducer.lab,
    exam: state.AppReducer.exam,
  });
};

const mapDispatchToProps = {
  setExam,
};

export default connect(mapStateToProps, { ...mapDispatchToProps })(ExamSelect);
