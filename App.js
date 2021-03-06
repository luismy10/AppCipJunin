import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Credenciales, EstadoCuenta, Contactenos, SplashScreen, CrediCars, PagoCuota, ConfirmarPago, RespuestaPago } from './screens';
import Tabs from './navigation/tabs';
import SecureStorage from 'react-native-secure-storage';
import { connect } from 'react-redux';
import { restoreToken } from './screens/actions/persona';

const Stack = createStackNavigator();

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      let userToken = await SecureStorage.getItem('user');
      this.props.restore(userToken);
    } catch (e) {
      this.props.restore(null);
    }
  }


  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {
            this.props.token.isLoading ? (
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
            ) : this.props.token.userToken == null ? (
              <>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Credenciales" component={Credenciales} />
                <Stack.Screen name="Contactenos" component={Contactenos} />
              </>
            ) :
              (
                <>
                  <Stack.Screen
                    name="Tabs"
                    component={Tabs}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen name="EstadoCuenta" component={EstadoCuenta} />
                  <Stack.Screen name="PagoCuota" component={PagoCuota} />
                  <Stack.Screen name="CrediCars" component={CrediCars} />
                  <Stack.Screen name="ConfirmarPago" component={ConfirmarPago} />
                  <Stack.Screen name="RespuestaPago" component={RespuestaPago} />
                </>
              )
          }
        </Stack.Navigator>
      </NavigationContainer>
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
    restore: (persona) => dispatch(restoreToken(persona))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default CrediCars;

