import React from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Platform,
  Linking
} from 'react-native';
import { images, COLORS, FONTS, SIZES, URL } from '../constants';
import SecureStorage from 'react-native-secure-storage';
import { connect } from 'react-redux';
import { signIn } from './actions/persona';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      clave: '',
      isVisiblePassword: false,
      isLogin: false,
    }
  }

  onEventLogin = async () => {
    if (this.state.usuario.trim().length == 0) {
      Alert.alert("Login", "Ingrese sus credenciales para continuar.");
    } else if (this.state.clave.trim().length == 0) {
      Alert.alert("Login", "Ingrese sus credenciales para continuar.");
    } else {
      if (!this.state.isLogin) {
        this.setState({ isLogin: true })
        try {
          const response = await fetch(URL.LOGIN_PERSONA, {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "usuario": this.state.usuario.trim(),
              "clave": this.state.clave.trim()
            })
          });
          const result = await response.json();
          if (result.state == 1) {
            try {
              await SecureStorage.setItem('user', JSON.stringify(result.persona));
              this.setState({ isLogin: false });
              this.props.addToken(JSON.stringify(result.persona));
            } catch (error) {
              this.setState({ isLogin: false });
              Alert.alert("Alerta", "No se pudo guardar la información, intente nuevamente.");
            }
          } else {
            this.setState({ isLogin: false });
            Alert.alert("Alerta", result.message);
          }
        } catch (error) {
          this.setState({ isLogin: false });
          Alert.alert("Alerta", "Error de conexión del cliente, intente nuevamente en un par de minutos.");
        }
      }
    }
  }

  oventOpenMaps = () => {
    const latitude = "-12.061817337706508";
    const longitude = "-75.2034517465679";
    const label = "Colegio De Ingenieros Del Perú, Francisco Solano, Huancayo 12001, Peru";

    let url = Platform.OS === 'ios' ? "maps:" + latitude + "," + longitude + "?q=" + label : "geo:" + latitude + "," + longitude + "?q=" + label;

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        const browser_url =
          "https://www.google.de/maps/@" +
          latitude +
          "," +
          longitude +
          "?q=" +
          label;
        return Linking.openURL(browser_url);
      }
    }).catch(error => {
      Alert.alert("Alerta", "La plataforma no puede acceder al navegador.");
    });
  }

  render() {
    return (
      <View style={css.container} >
        <ImageBackground source={images.fondoLogin} style={css.image}>
          <SafeAreaView>
            <ScrollView>

              <View style={{ flex: 1 }}>

                <View
                  style={{
                    alignItems: 'center',
                    marginBottom: 10,
                    marginTop: SIZES.height * 0.1
                  }}>
                  <Image
                    source={images.logoCIPColor}
                    style={{ width: 120, height: 120 }}
                  />
                </View>

                <View>
                  <Text style={{ ...FONTS.text_tittle, marginBottom: 60 }}>
                    COLEGIO DE INGENIEROS DEL PERÚ
                  </Text>
                </View>

                {
                  this.state.isLogin ?
                    <View style={{ alignItems: 'center' }}>
                      <ActivityIndicator size="large" color={COLORS.primary} />
                      <Text style={{ ...FONTS.h3 }}>Validando datos...</Text>
                    </View>
                    : null
                }

                <View style={{ alignItems: 'center', padding: 20 }}>
                  <View style={{ flexDirection: 'row', width: 220, marginBottom: 20 }}>
                    <TextInput
                      style={css.input}
                      placeholder="Ingrese Número CIP o Dni"
                      keyboardType="numeric"
                      onChangeText={(text) => { this.setState({ usuario: text }) }}
                      value={this.state.usuario}
                    />
                  </View>

                  <View style={{ flexDirection: 'row', width: 220 }}>
                    <TextInput
                      style={css.input}
                      placeholder="Ingrese Su Contraseña"
                      keyboardType="numeric"
                      onChangeText={(text) => { this.setState({ clave: text }) }}
                      value={this.state.clave}
                      secureTextEntry={!this.state.isVisiblePassword}
                    />
                    <TouchableOpacity
                      style={{ justifyContent: 'center' }}
                      onPress={() => this.setState({ isVisiblePassword: !this.state.isVisiblePassword })}>
                      <Image
                        source={
                          this.state.isVisiblePassword
                            ? images.eyesUnlock
                            : images.eyesLock
                        }
                        style={{ width: 20, height: 20 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={css.buttonAceptar}>
                  <TouchableOpacity
                    style={{
                      borderBottomLeftRadius: 10,
                      borderTopRightRadius: 10,
                      backgroundColor: '#EB2F2F',
                      paddingVertical: 8,
                      paddingHorizontal: 30,
                    }}
                    onPress={() => this.onEventLogin()}>
                    <Text style={{ ...FONTS.h4, color: COLORS.white }}>
                      INGRESAR
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Credenciales')}>
                    <Text style={{ ...FONTS.h4, textDecorationLine: 'underline' }}>
                      Solicita tus credenciales
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{ paddingVertical: 20, flexDirection: 'row', }}>
                  <View style={{ width: '50%', alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={() => { this.props.navigation.navigate("Contactenos") }}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={images.phoneIcon}
                        style={{
                          width: 12,
                          height: 12,
                          marginHorizontal: 10,
                          resizeMode: 'stretch',
                        }}
                      />
                      <Text style={{ ...FONTS.h4, fontWeight: 'bold' }}>Contáctenos</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{ width: '50%', alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={() => { this.oventOpenMaps() }}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={images.placeIcon}
                        style={{
                          width: 12,
                          height: 12,
                          marginHorizontal: 10,
                          resizeMode: 'stretch',
                        }}
                      />
                      <Text style={{ ...FONTS.h4, fontWeight: 'bold' }}>Ubicanos</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>

            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }

}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#C1BFBF',
    paddingLeft: 10,
  },
  buttonAceptar: {
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    token: state.personaReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToken: (persona) => dispatch(signIn(persona))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);