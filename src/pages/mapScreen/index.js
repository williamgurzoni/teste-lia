import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import styles from './style';
import Footer from '../../components/Footer';
import { setLab } from '../../actions/AppAction';

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      labs: [
        {
          id: '0',
          Lab: 'Laboratório Fleury',
          End: 'Rua Consolação, 123',
          Horario: 'Abre 8:00'
        },
        {
          id: '1',
          Lab: 'Laboratório Delboni',
          End: 'Avenida Paulista',
          Horario: 'Abre 8:00'
        },
        {
          id: '2',
          Lab: 'Laboratório XPTO',
          End: 'Avenida Tiradentes, 1',
          Horario: 'Abre 7:00'
        }        
      ]
    };

    this.viewabilityConfig = {
      waitForInteraction: false,
      viewAreaCoveragePercentThreshold: 100
    };
  }

  
  onViewableItemsChanged = (info) => {
    this.setState({ selectedItem: info.changed[0].key });
  }
  
  handleItem = async (item) => {
    await this.props.setLab(item.Lab);
    this.props.navigation.navigate('Exam');
  }

  renderItem = ({ item }) => {
    let selectedItemStyle = null;
    let active = false;

    if (this.state.selectedItem === item.id) {
      selectedItemStyle = styles.selectedItem;
      active = true;
    } 
    return (
      <TouchableWithoutFeedback onPress={() => this.handleItem(item)} >          
        <View style={[styles.item, selectedItemStyle]} >
          <View>
            <Text style={[{ color: '#2799fa' }, selectedItemStyle]}>
              <Text style={{ fontWeight: 'bold' }}>{item.Lab}{'\n'}</Text>
              <Text>{item.End}{'\n'}</Text>
              <Text>{item.Horario}</Text>
            </Text>
          </View>
          <View
            style={
              [
                styles.itemCircle,
                active ? { backgroundColor: '#FFF' } : { backgroundColor: '#2799fa' }
              ]
            }
          >
            <Text>-></Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <View style={styles.container} >        
        
        <View
          style={{
            height: 150,
            alignItems: 'stretch',
          }}
        >
          <FlatList
            data={this.state.labs}
            keyExtractor={item => item.id}
            renderItem={item => this.renderItem(item)}
            viewabilityConfig={this.viewabilityConfig}
            onViewableItemsChanged={this.onViewableItemsChanged}
            extraData={this.state}
          />
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
  });
};

const mapDispatchToProps = {
  setLab,
};

export default connect(mapStateToProps, { ...mapDispatchToProps })(MapScreen);
