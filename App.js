// import React from 'react';
// import {
//   StyleSheet,
// } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer, DarkTheme } from '@react-navigation/native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { PlantDetail } from './screens';
// import Tabs from './navigation/tabs';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{headerShown: false}}
//           initialRouteName={"Home"}>
//           {/* Tabs */}
//           <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }}/>
//           {/* Screens */}
//           <Stack.Screen name="PlantDetail" component={PlantDetail} options={{ headerShown: false }}></Stack.Screen>
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };
// // style
// const styles = StyleSheet.create({

// });

// export default App;

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./screens/Login";
import Home from './navigation/tabs';
import PlantDetail from './screens/PlantDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="PlantDetail" component={PlantDetail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
