import React from 'react';
import { Text, Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, icons } from '../constants';
import { Home,Favourite,Search,ListPlant,Camera } from '../screens';
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
                                source={icons.flash}
                                resizeMode='contain'
                                style={{
                                    tintColor: tintColor,
                                    width: 22,
                                    height: 22
                                }} />
                        );
                        case "Box": return (<Image
                            source={icons.cube}
                            resizeMode='contain'
                            style={{
                                tintColor: tintColor,
                                width: 22,
                                height: 22
                            }} />);
                        case "Camera":return <CameraButton />;
                        case "Search": return (<Image
                            source={icons.search}
                            resizeMode='contain'
                            style={{
                                tintColor: tintColor,
                                width: 22,
                                height: 22
                            }} />);
                        case "Favourite": return (<Image
                            source={icons.heart}
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
                name="Box"
                component={ListPlant}>
            </Tab.Screen>
            <Tab.Screen
                name="Camera"
                component={Camera}>
            </Tab.Screen>
            <Tab.Screen
                name="Search"
                component={Search}>
            </Tab.Screen>
            <Tab.Screen
                name="Favourite"
                component={Favourite}>
            </Tab.Screen>
        </Tab.Navigator>
    );
}
export default Tabs;