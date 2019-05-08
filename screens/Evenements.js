import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon, Separator } from 'native-base';
import {getAllInfo} from "../AxiosRequest";

export default class ListSeparatorExample extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        listItems:[],
        isLoading: true,
    };

    componentDidMount(){
        getAllInfo('evenement')

    .then(response =>
            response.map(event => ({
                nom: `${event.nom}`,
                date: `${event.date}`,
                adresse: `${event.adresse}`,
            }))
        )
            .then(listItems => {
                this.setState({
                    listItems,
                    isLoading: false
                });
            })

            .catch(error => this.setState({ error, isLoading: false }));
    }



    render() {
        const { isLoading, listItems } = this.state;


        return (
            <Container>
                <Content>
                    <Separator bordered>
                        <Text>MIDFIELD</Text>
                    </Separator>
                    <List>
                        {!isLoading ? (
                            listItems.map(event => {
                                const { nom, date, adresse} = event;
                                return (
                                    <ListItem>
                                        <Left>
                                            <Text>{nom}</Text>
                                        </Left>
                                        <Right>
                                            <Text>
                                                {date}
                                            </Text>
                                        </Right>
                                        <Separator />
                                        <Text>
                                            {adresse}
                                        </Text>

                                    </ListItem>
                                );
                            })
                        ) : (
                            <Text>Loading...</Text>
                        )}

                    </List>
                </Content>
            </Container>
        );
    }
}