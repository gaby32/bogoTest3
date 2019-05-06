import React from "react";
import {StyleSheet,Image} from 'react-native';
import {Body, Container, Content, Header,Text} from "native-base";
import {DrawerItems} from 'react-navigation'

export const Cdrawer = (props) => (

    <Container>
        <Header style={styles.drawerHeader}>
            <Body>
                <Image
                    style={styles.drawerImage}
                    source={require('./assets/img/monkeytiti.png')} />
                    <Text style={{ paddingLeft:52,textAlignVertical:'center'}}>Bienvenue Gabriel Bellemare</Text>

            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>

    </Container>

);

const styles = StyleSheet.create({

    container: {


    },
    drawerHeader: {
        height: 55,
        backgroundColor: '#01b8aa',




    },
    drawerImage: {

        height: 30,
        width: 30,
        borderRadius: 5
    }

});