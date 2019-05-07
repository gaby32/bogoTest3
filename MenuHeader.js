import {Body, Button, Header, Icon, Input, Item, Left, Right, Text,View} from "native-base";
import {withNavigation} from 'react-navigation'
import React, {Component} from "react";
import {StyleSheet, TouchableHighlight} from "react-native";
import {getCity} from "./FetchDemo";
import Menu from "./screens/Menu"

class MenuHeader extends Component {


    toggleDrawer = () => {

        this.props.navigationProps.toggleDrawer();

    };

    render() {


        const {navigate} = this.props.navigation;
        return (


            <Header noShadow style={{backgroundColor: '#01b8aa'}}>
                <Left>
                    <Button transparent onPress={this.toggleDrawer.bind(this)}>
                        <Icon name="menu" style={{fontSize: 38}}/>
                    </Button>
                </Left>
                <Body style={{position: 'absolute', textAlign: 'center',justifyContent: 'center'}}>

                <View style={{textAlign: 'center',justifyContent: 'center'}}>
                    <Item style={{width: '50%', height: '30%', borderColor: 'transparent'}}>
                        <Input placeholderTextColor="white" placeholder='   Rechercher une ville...'
                               style={styles.villeInput} />

                    </Item>

                    <TouchableHighlight>


                        <Text>
                            SEARCH
                        </Text>
                    </TouchableHighlight>
                </Body>
                <Right>

                    <Button transparent onPress={() => navigate("Profil")}>
                        <Icon name="person" style={{fontSize: 38}}/>
                    </Button>

                </Right>


            </Header>

        );
    }
}

const styles = StyleSheet.create({

    villeInput: {
        color: "#fff",
        fontFamily: 'roboto',
        fontSize: 13, borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }


});


export default withNavigation(MenuHeader);