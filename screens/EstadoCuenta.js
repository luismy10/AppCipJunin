import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import * as OpenAnything from 'react-native-openanything';
import { formatMoney } from './tools/Tools';
import { COLORS, SIZES, icons, FONTS, images, URL } from '../constants';
import { connect } from 'react-redux';

class EstadoCuenta extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      message: "",
      stateresponse: false,
      refreshing: true,
      token: JSON.parse(this.props.token.userToken)
    }

    this.props.navigation.setOptions({
      title: 'Estados de Cuenta',
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
      }
    });
  }

  componentDidMount() {
    this.loadCuentas();
  }

  async loadCuentas() {
    this.setState({ message: 'Cargando comprobantes...', refreshing: true });
    try {
      let response = await fetch(URL.INGRESOS_PERSONA, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "idDni": this.state.token.idDNI,
        })
      });
      let result = await response.json();
      this.setState({ data: result.data, stateresponse: true, refreshing: false });
    } catch (error) {
      this.setState({ message: "Error de conexión del cliente, intente nuevamente en un par de minutos.", data: [], stateresponse: false, refreshing: false });
    }
  }


  render() {
    return (
      <SafeAreaView style={styles.safeAreaView} >
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

        <View style={styles.contenedorTitulo}>
          <View style={{ marginRight: 10 }}>
            <Image
              source={icons.statementAccounts}
              resizeMode='contain'
              style={styles.itemIcon} />
          </View>
          <View>
            <Text style={{ fontWeight: 'bold' }}>
              Lista de Comprobantes
            </Text>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          {
            this.state.refreshing ?
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color={COLORS.primary} />
                <Text style={{ ...FONTS.h3, color: COLORS.black, textAlign: 'center' }}>{this.state.message}</Text>
              </View>
              :
              this.state.stateresponse ?
                this.state.data.length == 0 ?
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
                    <Image
                      source={icons.information}
                      resizeMode='contain'
                      style={{ width: 38, height: 38 }} />
                    <Text style={{ ...FONTS.h3, color: COLORS.black, textAlign: 'center' }}>No hay comprobantes asociados a tu cuenta para mostrar.</Text>
                  </View>
                  :
                  <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (<View style={styles.box}>

                      <View style={styles.cabecera}>
                        <Text style={{ ...FONTS.h4, color: COLORS.white, fontWeight: 'bold' }}>
                          {item.Comprobante}
                        </Text>
                        <Text style={{ ...FONTS.h4, color: COLORS.white, fontWeight: 'bold' }}>
                          {item.Serie + "-" + item.NumRecibo}
                        </Text>
                      </View>

                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '70%' }}>
                          <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                            <Text style={{ ...FONTS.p, fontWeight: 'normal' }}>Fecha: {item.Fecha}</Text>
                          </View>

                          <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                            <Text style={{ ...FONTS.p }}>Importe: S/ {formatMoney(item.Total)}</Text>
                          </View>
                        </View>

                        <View style={{ width: '30%', justifyContent: 'center' }}>
                          <TouchableOpacity onPress={() => { OpenAnything.Pdf(URL.DOMINIO+'sunat/pdfingresosDonwload.php?idIngreso=' + item.idIngreso) }} style={styles.exportPdf}>
                            <Image
                              style={{ width: 30, height: 30, tintColor: COLORS.white }}
                              source={icons.documentPdf}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>

                    </View>)}
                    keyExtractor={item => item.idIngreso.toString()}
                  />
                :
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
                  <Image
                    source={icons.error}
                    resizeMode='contain'
                    style={{ width: 38, height: 38 }} />
                  <Text style={{ ...FONTS.h3, color: COLORS.black, textAlign: 'center' }}>{this.state.message}</Text>
                </View>
          }
        </View>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.lightGray
  },
  contenedorTitulo: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  box: {
    backgroundColor: COLORS.white,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: -1, height: 5 },
    shadowOpacity: 0.71,
    shadowRadius: 10,
    elevation: 5,
    borderTopLeftRadius:15,
    borderTopRightRadius:15
  },
  cabecera: {
    width: '100%',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopLeftRadius:15,
    borderTopRightRadius:15
  },
  estadoDocumento: {
    backgroundColor: '#68E55D',
    borderRadius: 10,
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  exportPdf: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    alignSelf: 'flex-end',
    padding: 5,
    margin: 5,
  },
  itemIcon: {
    width: 30,
    height: 30,
    tintColor: COLORS.black
  }
});

const mapStateToProps = (state) => {
  return {
    token: state.personaReducer
  }
}


export default connect(mapStateToProps)(EstadoCuenta);
