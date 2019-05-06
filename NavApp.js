import {createAppContainer, createDrawerNavigator, createStackNavigator} from "react-navigation";
import Menu from "./screens/Menu";
import Profil from "./screens/Profil";
import Report from "./screens/Report";
import React from "react";
import { Navigation } from 'react-native-navigation';
import MenuHeader from "./MenuHeader";
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import {Cdrawer} from "./Cdrawer";
import BackHeader from "./BackHeader";


export function registerScreens() {
    Navigation.registerComponent('screens.Menu', () =>
        gestureHandlerRootHOC(Menu));
    Navigation.registerComponent('screens.Profil', () =>
        gestureHandlerRootHOC(Profil));
    Navigation.registerComponent('screens.Report', () =>
        gestureHandlerRootHOC(Report));
}

registerScreens();


const MenuStack = createStackNavigator({




    Menu: {
        screen: Menu,
        navigationOptions: ({navigation}) =>
            ({
                header: <MenuHeader navigationProps={navigation}/>,

            }),
    },
});


const ProfilStack = createStackNavigator({

    Profil: {
        screen: Profil,
        navigationOptions: ({navigation}) =>
            ({
            header: <BackHeader title="Profil" navigationProps={navigation}/>,

        }),


    },

},

    );


const ReportStack = createStackNavigator({

    Report: {
        screen: Report,
        navigationOptions: ({navigation}) => ({
            header: <BackHeader title="Rapporter un probleme" navigationProps={navigation}/>,

        }),
    },
},

    );


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



},
    {

        contentComponent: Cdrawer,
        contentOptions: {
            activeTintColor: '#01b8aa'
        }
    }
    );
const AppContainer = createAppContainer(DrawerNavigator);
export default AppContainer;