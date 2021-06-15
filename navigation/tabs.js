import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, icons, FONTS, images } from '../constants';
import { Home, Perfil, Contactenos, Comprobantes, Servicios } from '../screens';
import SecureStorage from 'react-native-secure-storage';
import { connect } from 'react-redux';
import { signOut } from '../screens/actions/persona';

const Tab = createBottomTabNavigator();

class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            title: 'CIP CD JUNÍN',
            headerStyle: {
                backgroundColor: COLORS.primary,
            },
            headerTintColor: COLORS.white,
            headerTitleAlign: 'center',
            headerTitleStyle: {
                ...FONTS.h3,
                fontWeight: 'bold',
                textAlignVertical: 'center',
                flex: 1,
            },
            headerLeft: () => (
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={icons.cip} resizeMode='contain' style={{ width: 24, height: 24 }} />
                    </View>
                </View>
            ),
            headerRight: () => (
                <View style={{ paddingHorizontal: 20 }}>
                    <TouchableOpacity
                        onPress={() => this.onEventCloseSession()} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={icons.turnoff} resizeMode='contain' style={{ width: 24, height: 24, tintColor: COLORS.white }} />
                    </TouchableOpacity>
                </View>
            )
        });
    }

    onEventCloseSession = async () => {
        try {
            await SecureStorage.removeItem('user');
            this.props.removeToken();
        } catch (e) {
            this.props.removeToken();
        }
    }

    render() {
        return (
            <Tab.Navigator tabBarOptions={{
                showLabel: false
            }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        const tintColor = focused ? COLORS.primary : COLORS.gray;
                        switch (route.name) {
                            case "Home": return (
                                <Image
                                    source={icons.home}
                                    resizeMode='contain'
                                    style={{
                                        tintColor: tintColor,
                                        width: 22,
                                        height: 22
                                    }} />
                            );
                            case "Comprobantes": return (<Image
                                source={icons.comprobantes}
                                resizeMode='contain'
                                style={{
                                    tintColor: tintColor,
                                    width: 22,
                                    height: 22
                                }} />);
                            case "Servicios": return (<Image
                                source={icons.services}
                                resizeMode='contain'
                                style={{
                                    tintColor: tintColor,
                                    width: 22,
                                    height: 22
                                }} />);
                            case "Contactenos": return (<Image
                                source={icons.contactanos}
                                resizeMode='contain'
                                style={{
                                    tintColor: tintColor,
                                    width: 22,
                                    height: 22
                                }} />);
                            case "Perfil": return (<Image
                                source={icons.user}
                                resizeMode='contain'
                                style={{
                                    tintColor: tintColor,
                                    width: 22,
                                    height: 22,
                                }} />);
                        }
                    }
                })}>
                <Tab.Screen
                    name="Home"
                    component={Home}>
                </Tab.Screen>
                <Tab.Screen
                    name="Comprobantes"
                    component={Comprobantes}>
                </Tab.Screen>
                <Tab.Screen
                    name="Servicios"
                    component={Servicios}>
                </Tab.Screen>
                <Tab.Screen
                    name="Contactenos"
                    component={Contactenos}>
                </Tab.Screen>
                <Tab.Screen
                    name="Perfil"
                    component={Perfil}>
                </Tab.Screen>
            </Tab.Navigator>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.personaReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeToken: () => dispatch(signOut())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Tabs);