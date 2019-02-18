import React, { Component } from 'react';
import { View, Picker } from 'react-native';

import Lia from '../../components/Lia';
import Footer from '../../components/Footer';
import styles from './style';

const instructions = 'Ok Edgar, que exames você precisa agendar?';

export default class ExamSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exam: '',
    };
  }
  handleSelect = (exam) => {
    this.setState({ exam });
    this.props.navigation.navigate('Day');
  }

  render() {
    return (
      <View style={styles.container} >

        <Lia instructions={instructions} />

        <View style={styles.btnWrapper} >
          <Picker
            selectedValue={this.state.exam}
            style={{ height: 50, width: '100%' }}
            onValueChange={(item) => this.handleSelect(item)}
          >
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
