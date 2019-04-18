import {Body, Button, Container, Header, Icon, Left, Right, Title} from "native-base";
import {withNavigation} from 'react-navigation'
import React, {Component} from "react";

class Cheader extends Component {

    toggleDrawer = () => {

        this.props.navigationProps.toggleDrawer();

    };

    render() {
        const {navigate} = this.props.navigation;
        return (

            <Container>
                <Header noShadow>
                    <Left>
                        <Button transparent onPress={this.toggleDrawer.bind(this)}>
                            <Icon name="menu" style={{fontSize: 38}}/>

                        </Button>
                    </Left>
                    <Body style={{position: 'absolute', textAlign: 'center'}}>
                        <Title style={{fontSize: 28, fontFamily: 'Roboto'}}>{this.props.title}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => navigate("Profil")}>
                            <Icon name="person" style={{fontSize: 38}}/>
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}

export default withNavigation(Cheader);