import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Errorboundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            info: null,
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            error: error,
            info: info,
        });
    }

    render() {
        if (this.state.error) {
            return (
                <View>
                    <Text>Something went wrong ..!! </Text>
                    <Text>The error: {this.state.error.toString()}</Text>

                    <Text>{this.state.info.componentStack}</Text>
                </View>
            );
        }
        return this.props.children;
    }
}