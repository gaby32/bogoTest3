import React, {Component} from 'react';
import {Container,View} from "native-base";


export default class Profil extends Component {

    render() {
        return (
            <Container>

                <View style={{flex: 1, flexDirection: 'row'}}>

                    {/* Flex box -> En haut a gauche + en dessous */}
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        {/* Flex box -> En haut */}
                        <View style={{width: '100%', height: '50%', backgroundColor: 'steelblue'}} />
                        {/* Flex box -> En bas */}
                        <View style={{width: '100%', height: '50%', backgroundColor: 'skyblue'}} />
                    </View>


                    {/* Flex box -> A droite des deux precedentes */}
                    <View style={{width: '50%', height: '100%', backgroundColor: 'powderblue'}} />

                </View>

                {/* Flex box -> Les deux box du bas */}
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
                    {/* Flex box -> En haut */}
                    <View style={{width: '100%', height: '50%', backgroundColor: 'steelblue'}} />
                    {/* Flex box -> En bas */}
                    <View style={{width: '100%', height: '50%', backgroundColor: 'skyblue'}} />
                </View>

            </Container>
        );
    }
}

