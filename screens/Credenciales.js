import React from 'react';
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { images, COLORS, FONTS, SIZES, icons } from '../constants';
import { connect } from 'react-redux';

class Credenciales extends React.Component {

  constructor(props) {
    super(props);

    this.props.navigation.setOptions({
      title: 'Solicitar Credenciales',
      headerStyle: {
        backgroundColor: COLORS.primary,
      },
      headerTintColor: COLORS.white,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        ...FONTS.h3,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
      }
    });
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={css.container}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        <ImageBackground source={images.fondoLogin} style={css.image}>
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
                <TextInput style={css.input} placeholder="Ingrese Número CIP o Dni" keyboardType="numeric" />
              </View>

              <View style={css.buttonContent}>
                <TouchableOpacity style={css.buttonStyle}
                  onPress={() => this.props.navigation.navigate('')}>
                  <Text style={{ ...FONTS.h4, color: COLORS.white }}>ENVIAR</Text>
                </TouchableOpacity>
              </View>

              <View style={{ width: '100%', alignItems: 'center', padding: 30 }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Las credenciales serán enviadas a su correo institucional, en caso de no contar comuníquese con el área de informática que lo puede visualizar en contáctenos.</Text>
                {/* <View><TouchableOpacity style={{}}><Text style={{ color: COLORS.blue, borderBottomColor: COLORS.blue, borderBottomWidth: 1 }}>aquí.</Text></TouchableOpacity></View> */}
              </View>
            </View>
          </ScrollView>
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
  buttonContent: {
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    borderBottomLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#EB2F2F', paddingVertical: 8, paddingHorizontal: 30
  }
});

const mapStateToProps = (state) => {
  return {
    token: state.personaReducer
  }
}


export default connect(mapStateToProps)(Credenciales);