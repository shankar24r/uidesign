import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';
import Bell from 'react-native-vector-icons/MaterialIcons'
import { createAppContainer } from 'react-navigation';
import TabNavigator from '../components/router'

const AppIndex = createAppContainer(TabNavigator)


const { height, width } = Dimensions.get('window');

export default class Header extends Component { 

    render() {
        return (
            <View style={styles.container}>

                <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textHome}>Create Challenge</Text>
                </View>
                <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../images/zark.png')} style={{ width: 100, height: 40, position: 'absolute', right: 0 }} />
                </View>
                <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                    <Bell name="notifications-none" size={27} color={'#000'} />
                </View>
                <AppIndex/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: height / 100 * 9,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    }, textHome: {
        color: '#000004',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold'
    }
})