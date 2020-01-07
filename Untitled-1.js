import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import Prep from "react-native-vector-icons/Foundation";
import Cook from "react-native-vector-icons/FontAwesome5";
import Feed from "react-native-vector-icons/FontAwesome";

const { height, width } = Dimensions.get('window')

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      datas: ["", ""]
    };
    this.renderData = this.renderData.bind(this);
  }
  renderData() {
    return (
      <TouchableOpacity activeOpacity={.7}>
        <View style={styles.flatItem}>
          <View style={{ flex: 0.4 }} >
            <View style={styles.box1}><Text style={styles.text}>Strawberry Pavlova</Text></View>
            <View style={styles.box2}><Text style={styles.text}>This layout is organized as a Row. The row contains two children: a column on the left, and an image on the right</Text></View>
            <View style={styles.box1}><Text style={styles.text}>* * * * *  170 Reviews</Text></View>
            <View style={styles.box4}>
              <View style={styles.icon}>
                <Prep name="clipboard-notes" size={15} color={'#000'} />
                <Text style={styles.icon_text}>PREP</Text>
                <Text style={styles.icon_text}>25 min</Text>
              </View>
              <View style={styles.icon}>
                <Cook name="cookie" size={15} color={'#000'} />
                <Text style={styles.icon_text}>COOK</Text>
                <Text style={styles.icon_text}>1 hr</Text>
              </View>
              <View style={styles.icon}>
                <Feed name="spoon" size={15} color={'#000'} />
                <Text style={styles.icon_text}>FEEDS</Text>
                <Text style={styles.icon_text}>4-6</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.6, margin: 5 }}>
            <Image source={require('./src/images/cake.png')} style={{ height: height - 450, width: width - 500, resizeMode: 'cover' }} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.datas}
          renderItem={this.renderData} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#C6CBC4', padding: 5, },
  flatItem: { flexDirection: 'row', marginTop: 5, backgroundColor: '#FFFFFF' },
  box1: { height: 15, margin: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#E5EFFD' },
  box2: { height: 70, margin: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#E5EFFD' },
  box4: { flex: 1, flexDirection: 'row', margin: 5, padding: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#E5EFFD' },
  text: { textAlign: 'center', justifyContent: 'center', fontSize: 10 },
  icon: { flex: 0.3, alignItems: 'center', justifyContent: 'center' },
  icon_text: { fontSize: 10 }
}) 