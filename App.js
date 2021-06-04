import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './navigation/tabs';
import PlantDetail from './screens/PlantDetail';
import Ingresos from './screens/Ingresos';
import Credenciales from './screens/Credenciales';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Login'}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PlantDetail"
            component={PlantDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Ingresos"
            component={Ingresos}
          />
          <Stack.Screen
            name ="Credenciales"
            component={Credenciales}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
