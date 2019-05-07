import React, {Component} from 'react';
import {Container,Header,Text} from "native-base";
import {View} from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'


export default class Menu extends Component {

    render() {
        return (
            <Container>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'

                     }}>
                        <Card>
                            <CardImage
                                source={require('./shawi.jpg')}
                                isDark={true}
                            />
                            <CardTitle
                                title=""
                                subtitle="Ville de Shawinigan"
                            />
                            <CardContent text="Shawinigan, la ou les reves meurent!" />
                            <CardAction
                                separator={false}
                                inColumn={false}>
                                <CardButton
                                    onPress={() => {}}
                                    title="Next"
                                    color="blue"
                                />
                            </CardAction>
                        </Card>
                    </View>
            </Container>
        );
    }
}

