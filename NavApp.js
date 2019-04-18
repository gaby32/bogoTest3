import {createAppContainer, createDrawerNavigator, createStackNavigator} from "react-navigation";
import Menu from "./screens/Menu";
import Profil from "./screens/Profil";
import Report from "./screens/Report";
import React from "react";
import Cheader from "./Cheader";

const MenuStack = createStackNavigator({

    Menu: {
        screen: Menu,
        navigationOptions: ({navigation}) =>
            ({
                header: <Cheader title="Menu Principal" navigationProps={navigation}/>,

            }),
    },
});


const ProfilStack = createStackNavigator({

    Profil: {
        screen: Profil,
        navigationOptions: ({navigation}) => ({
            header: <Cheader title="Profil" navigationProps={navigation}/>,

        }),
    },
});


const ReportStack = createStackNavigator({

    Report: {
        screen: Report,
        navigationOptions: ({navigation}) => ({
            header: <Cheader title="Rapporter un probleme" navigationProps={navigation}/>,

        }),
    },
});


const DrawerNavigator = createDrawerNavigator({

    MenuDraw: {
        screen: MenuStack,
        navigationOptions: {
            drawerLabel: 'Menu Principal',
        },
    },
    ProfilDraw: {

        screen: ProfilStack,
        navigationOptions: {
            drawerLabel: 'Profil',
        },
    },
    ReportDraw: {

        screen: ReportStack,
        navigationOptions: {
            drawerLabel: 'Rapporter un probleme',
        },
    },
});
const AppContainer = createAppContainer(DrawerNavigator);
export default AppContainer;