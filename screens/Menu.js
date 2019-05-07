import React, {Component} from 'react';
import {Container, Input, Text, View} from "native-base";
import {Navigation} from 'react-native-navigation';

export default class Menu extends Component {






    render() {
        const { navigation } = this.props;
        const villeNom = navigation.getParam('villeNom');

        return (
            <Container>


                <Text>
                    {villeNom}
                </Text>
            </Container>
        );
    }
}
