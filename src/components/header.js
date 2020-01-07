import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, Text, StatusBar, TextInput } from 'react-native';
import Bell from 'react-native-vector-icons/MaterialIcons'
import { createAppContainer } from 'react-navigation';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { SearchBar } from 'react-native-elements';
import TabNavigator from '../components/router'

const AppIndex = createAppContainer(TabNavigator)
const { height, width } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='white'
                    barStyle='dark-content' />
                <View style={{ flexDirection: 'row', height: height / 100 * 9 }}>
                    <View style={{ flex: 0.5, justifyContent: 'center' }}>
                        <Text style={styles.text}>Create Challenge</Text>
                    </View>
                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../images/zark.png')} style={{ width: 100, height: 40, position: 'absolute', right: 0 }} />
                    </View>
                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                        <Bell name="notifications-none" size={27} color={'#000'} />
                    </View>
                </View>

                <ParallaxScrollView
                    renderStickyHeader={() => (<SearchBar
                        lightTheme
                        round
                        placeholder="Search"
                        style={{ height: height - 600, margin: 10 }} />)}
                    backgroundScrollSpeed={2}
                    stickyHeaderHeight={-20}
                    backgroundColor='#D3D3D4'
                    parallaxHeaderHeight={0}>

                    <View style={{ flexDirection: 'row', backgroundColor: '#D3D3D4', height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ height: 10, width: 30, borderRadius: 50, marginTop: 8, backgroundColor: '#027DDD' }}></View>
                        <View style={{ height: 10, width: 10, borderRadius: 50, marginTop: 8, marginLeft: 5, backgroundColor: '#B1B1B1' }}></View>
                        <View style={{ height: 10, width: 10, borderRadius: 50, marginTop: 8, marginLeft: 5, backgroundColor: '#B1B1B1' }}></View>
                    </View>
                    <AppIndex />
                </ParallaxScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }, text: {
        color: '#000004',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold'
    }
})