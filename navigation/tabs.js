import React from 'react';
import { Text, Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, icons } from '../constants';
import { Home,ListPlant,Camera,Perfil,Contactenos,Comprobantes } from '../screens';
const Tab = createBottomTabNavigator();

const CameraButton = () => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40, 
                borderRadius: 25,
                backgroundColor: COLORS.primary
            }}>
            <Image
                source={icons.camera}
                resizeMode='contain'
                style={{
                    width: 22,
                    height: 22,
                }} />
        </View>
    );
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
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
                        case "Camera":return <CameraButton />;
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
                name="Camera"
                component={Camera}>
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
export default Tabs;