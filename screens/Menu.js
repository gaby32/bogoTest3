import React, {Component} from 'react';
import {Container, Input, Text, View} from "native-base";
import {getAllInfo} from "../AxiosRequest";


export default class Menu extends Component {



    componentDidMount(){
        getAllInfo('evenement')
            .then(json => json.map(result => (
                {
                    nom: result.nom,
                    adresse: result.adresse
                })))
            .then(newData => console.log(newData))
    }





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
