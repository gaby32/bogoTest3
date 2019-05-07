import React, {Component} from 'react';
import {Container,Header,Text} from "native-base";

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

