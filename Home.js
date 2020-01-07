import React, { Component } from "react";
import { StyleSheet, FlatList, Text, View, TouchableOpacity, Image, Dimensions, Alert, alert, TextInput } from "react-native";
import Activebutton from "react-native-vector-icons/Fontisto";
import Inactivebutton from "react-native-vector-icons/Fontisto";
import ErrorBoundary from './Errorboundry'

const customData = require('./src/components/sample2.json');

const { height, width } = Dimensions.get('window')


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      search: '',
    };
    this.arrayholder = [];
    this.renderData = this.renderData.bind(this);
  }

  componentDidMount() {
    this.setState({ datas: customData.data },
      function () {
        this.arrayholder = customData.data;
      });
  }

  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.name ? item.name.toUpperCase() : ' '.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      datas: newData,
      search: text,
    });
  }


  SelectContactData({ item }) {
    if (item.checkbox === true) {
      this.setState({ checkbox: item.checkbox = false })
    } else {
      this.setState({ checkbox: item.checkbox = true })
    }
  }

  Display({ whole_data }) {
    const details = whole_data[0].name
    console.log('dats', details)
  }

  renderData({ item }) {
    const customer_name = (Array.from(item.name));
    return (
      <View>
        <TouchableOpacity activeOpacity={0.7} style={styles.flatItem} onPress={() => this.SelectContactData({ item })}>
          <View style={styles.round_icon} ><Text style={{ color: 'white', fontSize: 23 }}>{customer_name[0]}</Text></View>
          <View style={{ flex: 1, flatflexDirection: 'row', paddingLeft: 35, paddingTop: 2 }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.mobile_id}>{item.mobile_no}</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {item.checkbox == true ? <Activebutton name="radio-btn-active" size={20} /> : <Inactivebutton name="radio-btn-passive" size={20} />}
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const whole_data = this.state.datas

    return (
      <ErrorBoundary>
        <View style={styles.container}>

          <TextInput
            style={{ height: 45, backgroundColor: '#F0F0F0', margin: 8, borderRadius: 15, padding: 10 }}
            placeholder="Search"
            onChangeText={text => this.SearchFilterFunction(text)}
            value={this.state.search}
            placeholder="Search"
            value={this.state.search} />
            
          <FlatList
            data={this.state.datas}
            renderItem={this.renderData}
            enableEmptySections={true}
            style={{ marginTop: 10 }}
            keyExtractor={(item, index) => index.toString()} />

          <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={() => this.Display({ whole_data })} >
            <Text style={{ fontSize: 23, fontWeight: 'bold', textAlign: 'center', marginTop: 10, color: '#8a3479' }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ErrorBoundary>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#D3D3D4",
    padding: 10
  },
  flatItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#FFFFFF'
  },
  name: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '300',
    lineHeight: 24,
  },
  mobile_id: {
    color: '#8A8A8A',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 'normal'
  },
  round_icon: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    position: 'absolute',
    bottom: 15,
    left: 25,
    height: 55,
    width: width - 50,
    backgroundColor: '#ffffff',
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#8a3479'
  }
});