import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';

const { height, width } = Dimensions.get('window')

export default class finger extends Component {

    constructor(props){
        super(props);
        this.state={

            status:'Scan You Finger'
        }
    }

    componentDidMount(){
        
    }

    render() {
        return (

            <View style={styles.container}>

                <ImageBackground source={require('./src/images/background.jpg')} style={styles.back}>
                    <View style={styles.index}>
                        <Text style={styles.text}>Fingerprint Authentication</Text>
                        <View style={styles.image}>
                            <Image source={require('./src/images/finger.png')} style={styles.finger}></Image>
                            <Text style={{ textAlign: 'center' }}>Please use your device Touch-Pad to Fingerprint Authenticate </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    back: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,

    },
    index: {
        height: height - 250,
        width: width - 90,
        borderColor: '#fff',
        backgroundColor: 'rgba(217, 252, 237, 0.6)',
        borderRadius: 15

    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 70
    },
    finger: {
        flex: 1,
        width: 125,
        resizeMode: 'contain',

    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute'
    }
})