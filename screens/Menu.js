import React, {Component} from 'react';
import {Container, Input, Text, View} from "native-base";
import {StyleSheet, TouchableHighlight} from 'react-native';
import axios from "axios";

var user = 'admin';
var pass = 'admin';
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ville: '',
            error: false,
            villeDone:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            ville: e.nativeEvent.text
        });
    }
    handleSubmit() {
   this.getCity(this.state.ville)

    }


            getCity = (villeInput) => {
                let city = villeInput.toLowerCase().trim();

                axios.get(`http://bogoville.xyz/rest/region/${city}`, {
                        auth: {
                            username: user,
                            password: pass
                        }
                    },
                )

                    .then( (response) =>{

                        this.setState({
                                villeDone: JSON.stringify(response.data.nom)
                        }
                        );
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            };


    render() {
        return (
            <Container>

                <View style={styles.main}>
                    <Input
                        style={styles.searchInput}
                          onChange={this.handleChange}
                    />
                    <TouchableHighlight
                        style={styles.button}
                        underlayColor="red"
                          onPress = {this.handleSubmit}
                    >
                        <Text
                            style={styles.buttonText}>
                            SEARCH
                        </Text>
                    </TouchableHighlight>

                    <Text>
                        {this.state.villeDone}
                    </Text>
                </View>

            </Container>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'row',


    },

    searchInput: {
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        color: 'black'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
    }
});
