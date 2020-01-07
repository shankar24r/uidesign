import React, { Component } from "react";
import { StyleSheet, FlatList, Text, View, TouchableOpacity, Image, Dimensions,Button ,Alert} from "react-native";
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const customData = require('../components/sample.json');
const { height, width } = Dimensions.get('window')

export default class first extends Component {
    static navigationOptions = {
        title: 'All',       
    };

    constructor(props) {
        super(props);
        this.state = {
            datas: []
        };
        this.renderData = this.renderData.bind(this);
    }

    componentDidMount() {
        this.setState({ datas: customData.data })
    }

    renderData({ item }) {
        return (
            <View style={styles.GridViewContainer}>
                <TouchableOpacity activeOpacity={0.7} onPress={()=>(Alert.alert(item.game_name))}>
                    <Image source={{ uri: item.img_url }} style={{ flex: 0.6, alignItems: 'center', justifyContent: 'center', width: 155, borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
                    <Text style={styles.GridViewText} > {item.game_name} </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.datas}
                    renderItem={this.renderData}
                    numColumns={2} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#D3D3D4"
    },
    GridViewContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        margin: 12,
        borderRadius: 20,
    },
    GridViewText: {
      flex: 0.4, backgroundColor: '#FFFFFF', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 ,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#000000',
        padding: 10,
    }
});