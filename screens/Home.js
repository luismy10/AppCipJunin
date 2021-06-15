import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { COLORS, SIZES, icons, FONTS, images, URL } from '../constants';
import { formatMoney } from "./tools/Tools";
import { connect } from 'react-redux';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      reload: false,
      estado: 0,
      cip: '',
      message: 'Cargando información...',
      apellidos: '',
      nombres: '',
      especialidad: '',
      capitulo: '',
      condicion: '',
      habilidad: '',
      ultimaCuota: '',
      habilidadHasta: '',
      cumplirTreinta: 0,
      deuda: 0,
      token: JSON.parse(this.props.token.userToken),
      eventos: [
        {
          id: "0",
          name: 'Evento 1',
          img: images.evento1,
          favourite: false
        },
        {
          id: "1",
          name: 'Evento 2',
          img: images.evento2,
          favourite: true
        },
        {
          id: "2",
          name: 'Evento 3',
          img: images.evento3,
          favourite: false
        },
        {
          id: "3",
          name: 'Evento 4',
          img: images.evento4,
          favourite: false
        },
        {
          id: "4",
          name: 'Evento 5',
          img: images.evento5,
          favourite: false
        },
        {
          id: "5",
          name: 'Evento 6',
          img: images.evento6,
          favourite: false
        },
        {
          id: "6",
          name: 'Evento 7',
          img: images.evento7,
          favourite: false
        }
      ]
    }
  }

  async componentDidMount() {
    this.loadInformacion();
  }

  onEventReload = async () => {
    this.loadInformacion();
  }

  async loadInformacion() {
    this.setState({ isLoading: false, reload: false, message: 'Cargando información...' });
    try {
      let response = await fetch(URL.INFORMACION_PERSONA, {
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
      if (result.state == 1) {
        this.setState({
          isLoading: true,
          reload: false,
          estado: 1,
          cip: result.persona.CIP,
          apellidos: result.persona.Apellidos,
          nombres: result.persona.Nombres,
          especialidad: result.persona.Especialidad,
          capitulo: result.persona.Capitulo,
          condicion: result.persona.Condicion,
          habilidad: result.persona.Habilidad,
          ultimaCuota: result.persona.FechaUltimaCuota,
          habilidadHasta: result.persona.HabilitadoHasta,
          cumplirTreinta: result.persona.CumplirTreinta,
          deuda: result.deuda
        });
      } else {
        this.setState({ isLoading: true, message: result.message, estado: result.state, reload: false });
      }
    } catch (error) {
      this.setState({ isLoading: false, message: "Error de conexión del cliente, intente nuevamente en un par de minutos.", reload: true });
    }
  }

  _renderItem(item) {
    return (
      <Image style={{ width: 80, height: 120 }} source={item.img} />
    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        <View style={styles.contenedorTitulo}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={icons.home}
              resizeMode='contain'
              style={{ width: 24, height: 24, tintColor: COLORS.black }} />
            <Text style={{ ...FONTS.h3, marginLeft: 5 }}>
              Inicio
            </Text>
          </View>
          <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => { this.onEventReload() }}>
              <Image
                source={icons.reload}
                resizeMode='contain'
                style={{ width: 24, height: 24, tintColor: COLORS.blue }} />
            </TouchableOpacity>
          </View>
        </View>
        {
          !this.state.isLoading ?
            (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color={COLORS.primary} />
                <Text style={{ ...FONTS.h3, color: COLORS.black, textAlign: 'center', marginBottom: 10 }}>{this.state.message}</Text>
                {
                  this.state.reload ?
                    (
                      <TouchableOpacity onPress={() => { this.onEventReload() }} style={{ flexDirection: 'row' }}>
                        <Image
                          source={icons.reload}
                          resizeMode='contain'
                          style={{ width: 20, height: 20, tintColor: COLORS.blue, marginRight: 5 }} />
                        <Text style={{ ...FONTS.h4, textDecorationLine: 'underline' }}>Actualizar Vista</Text>
                      </TouchableOpacity>
                    ) : null
                }
              </View>
            )
            : this.state.estado == 1 ?
              (
                <ScrollView showsVerticalScrollIndicator={false}>
                  {/* START DATOS DEL INGENIERO */}
                  <View style={styles.container}>

                    <View style={{ marginVertical: 5, paddingHorizontal: 20, flexDirection: 'row' }}>
                      <View>
                        <Text style={{ ...FONTS.h2 }}>N° CIP : {this.state.cip}</Text>
                        <Text style={{ ...FONTS.h2 }}>Ing. {this.state.apellidos + ", " + this.state.nombres}</Text>
                      </View>
                    </View>

                    {/* <View style={{ paddingHorizontal: 20, flexDirection: 'row' }}>
                      <Text style={{ ...FONTS.h3, color: COLORS.gray, }}>{this.state.capitulo + " - " + this.state.especialidad}</Text>
                    </View> */}

                    <View style={{ marginVertical: 5, paddingHorizontal: 20 }}>
                      <Text style={{ ...FONTS.h4, }}>Su Condición : {this.state.condicion}</Text>
                      {/* <Text style={{ ...FONTS.h4, color: COLORS.gray, }}>{this.state.cumplirTreinta <= 0 ? '30 años cumplidos' : (this.state.cumplirTreinta + ' años para ser Vitalicio')} </Text> */}
                    </View>

                    {/* END DATOS DEL INGENIERO */}

                    {/*  START DETALLE DE SUS PAGOS*/}
                    <View style={{ paddingHorizontal: 20, marginVertical: 5 }}>

                      <View style={styles.box}>
                        <View style={styles.boxBody}>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.boxTitle}>Su Estado</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={this.state.habilidad == 1 ? icons.ok : icons.warning} style={styles.boxImage} />
                            <Text style={styles.boxSubTitle}>{this.state.habilidad == 1 ? "HABILITADO" : "NO HABILITADO"}</Text>
                          </View>
                        </View>

                        <View style={styles.boxBody}>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.boxTitle}>Su Deuda</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={icons.moneyBag} style={styles.boxImage} />
                            <Text style={styles.boxSubTitle}>S/ {formatMoney(this.state.deuda)}</Text>
                          </View>
                        </View>
                      </View>


                      <View style={styles.box}>
                        <View style={styles.boxBody}>
                          <View style={{ flexDirection: 'row', }}>
                            <Text style={styles.boxTitle}>Ultima Cuota</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={icons.calendar} style={styles.boxImage} />
                            <Text style={styles.boxSubTitle}>{this.state.ultimaCuota}</Text>
                          </View>
                        </View>

                        <View style={styles.boxBody}>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.boxTitle}>Habilitado Hasta</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={icons.calendar} style={styles.boxImage} />
                            <Text style={styles.boxSubTitle}>{this.state.habilidadHasta}</Text>
                          </View>
                        </View>
                      </View>

                    </View>
                    {/* END DETALLE DE SUS PAGOS */}

                    {/* START */}

                    <View style={{ backgroundColor: '#BABABA', paddingHorizontal: 20, paddingVertical: 10 }}>
                      <View style={{ marginBottom: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Eventos</Text>
                        <TouchableOpacity>
                          <Text style={{ ...FONTS.h3, color: COLORS.white, textDecorationLine: 'underline' }}>Ver Todo</Text>
                        </TouchableOpacity>
                      </View>
                      <ScrollView horizontal>
                        {
                          this.state.eventos.map((item, index) => (
                            <View key={index} style={{ marginRight: 10 }}>
                              <Image style={{ width: 80, height: 120 }} source={item.img} />
                            </View>
                          ))
                        }
                      </ScrollView>
                    </View>

                    {/* END */}

                    {/* START */}
                    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                      <View style={{ marginBottom: 5 }}>
                        <Text style={{ color: COLORS.grayDark, ...FONTS.h2 }}>Bolsa de Trabajo</Text>
                      </View>
                      {/*  */}
                      <View style={{ borderColor: "#DBDBDB", borderWidth: 1, backgroundColor: COLORS.white, marginBottom: 10 }}>
                        <View style={{ padding: 10 }}>
                          <View style={{ marginBottom: 10 }}>
                            <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>Empresa constructora PECONASA </Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: '80%' }}>
                              <Text style={{ ...FONTS.P, color: COLORS.secondary }}>Puesto: Especialista varios</Text>
                              <Text style={{ ...FONTS.P, color: COLORS.secondary }}>Ciudad: Piura</Text>
                              <Text style={{ ...FONTS.P, color: COLORS.secondary }}>Vigente hasta: 05/20/2021</Text>
                            </View>
                            <View style={{ width: '20%' }}>
                              <Image style={{ width: 64, height: 64 }} source={icons.briefcase} />
                            </View>
                          </View>
                          <View>
                            <TouchableOpacity>
                              <Text style={{ ...FONTS.h3, color: COLORS.primary, textDecorationLine: 'underline' }}>Ver requisitos</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                      {/*  */}
                    </View>

                    {/* END */}
                  </View>
                </ScrollView>
              )
              :
              (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={icons.information}
                    resizeMode='contain'
                    style={{ width: 38, height: 38 }} />
                  <Text style={{ ...FONTS.h3, color: COLORS.black, textAlign: 'center', marginBottom: 10 }}>{this.state.message}</Text>
                  <TouchableOpacity onPress={() => { this.onEventReload() }} style={{ flexDirection: 'row' }}>
                    <Image
                      source={icons.reload}
                      resizeMode='contain'
                      style={{ width: 20, height: 20, tintColor: COLORS.blue, marginRight: 5 }} />
                    <Text style={{ ...FONTS.h4, textDecorationLine: 'underline' }}>Actualizar Vista</Text>
                  </TouchableOpacity>
                </View>
              )
        }
      </SafeAreaView >
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  contenedorTitulo: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  box: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10
  },
  boxBody: {
    width: '50%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    shadowOffset: { width: -1, height: 3, },
    shadowOpacity: 0.51,
    shadowRadius: 10,
    elevation: 1,
  },
  boxImage: {
    width: 26,
    height: 26,
    marginRight: 5
  },
  boxTitle: {
    ...FONTS.italicBold
  },
  boxSubTitle: {
    ...FONTS.italic,
    color: COLORS.grayDark,
  }
});

const mapStateToProps = (state) => {
  return {
    token: state.personaReducer
  }
}

export default connect(mapStateToProps)(Home);
