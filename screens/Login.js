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
} from 'react-native';
import { images, COLORS, FONTS, SIZES } from '../constants';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisiblePassword: false,
    };
  }

  _isVisiblePassword = () => {
    this.setState({ isVisiblePassword: !this.state.isVisiblePassword });
  };

  render() {
    return (
      <View style={css.container}>
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

                <View style={{ paddingHorizontal: 20, }}>
                  <TextInput
                    style={css.input}
                    placeholder="Ingrese Número CIP o Dni"
                    keyboardType="numeric"
                  />
                </View>

                <View style={{ paddingHorizontal: 20, paddingTop: 15 }}>
                  <TextInput
                    style={css.input}
                    placeholder="Ingrese Su Contraseña"
                    secureTextEntry={!this.state.isVisiblePassword}
                  />
                  <TouchableOpacity
                    style={{ position: 'absolute', right: 45, top: 40 }}
                    onPress={() => this._isVisiblePassword()}>
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

                <View style={css.buttonAceptar}>
                  <TouchableOpacity
                    style={{
                      borderBottomLeftRadius: 10,
                      borderTopRightRadius: 10,
                      backgroundColor: '#EB2F2F',
                      paddingVertical: 8,
                      paddingHorizontal: 30,
                    }}
                    onPress={() => this.props.navigation.navigate('Tabs')}>
                    <Text style={{ ...FONTS.h4, color: COLORS.white }}>
                      INGRESAR
                </Text>
                  </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Credenciales')}>
                    <Text style={{ textDecorationLine: 'underline' }}>
                      ¿Olvido su contraseña?
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    paddingVertical: 20,
                    flexDirection: 'row',
                  }}>
                  <View style={{ width: '50%', alignItems: 'center' }}>
                    <View
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
                      <Text style={{ fontWeight: 'bold' }}>Contactenos</Text>
                    </View>
                  </View>

                  <View style={{ width: '50%', alignItems: 'center' }}>
                    <View
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
                      <Text style={{ fontWeight: 'bold' }}>Ubicanos</Text>
                    </View>
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
    height: 40,
    margin: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#C1BFBF',
    paddingLeft: 10,
  },
  buttonAceptar: {
    marginVertical:15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
