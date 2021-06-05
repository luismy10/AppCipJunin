import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen,Login, Credenciales, Ingresos } from './screens/';
import Tabs from './navigation/tabs';
const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ingresos"
          component={Ingresos}
        />
        <Stack.Screen
          name="Credenciales"
          component={Credenciales}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
