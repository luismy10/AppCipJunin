import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, Image, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, icons, FONTS, images, URL } from '../constants';
import { connect } from 'react-redux';

class Perfil extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      reload: false,
      message: 'Cargando información...',
      cip: '',
      dni: '',
      apellidos: '',
      nombres: '',
      fechaNacimiento: '',
      sexo: '',
      especialidad: '',
      capitulo: '',
      condicion: '',
      habilidad: '',
      ultimaCuota: '',
      habilidadHasta: '',
      cumplirTreinta: 0,
      deuda: 0,
      image: '',
      token: JSON.parse(this.props.token.userToken)
    }
  }


  async componentDidMount() {
    this.loadInformacion();
  }

  onEventReload = async () => {
    this.loadInformacion();
  }

  async loadInformacion() {
    this.setState({ isLoading: true, reload: false, message: 'Cargando información...', });
    try {
      let response = await fetch(URL.PERFIL_PERSONA, {
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
      this.setState({
        isLoading: false,
        reload: false,
        cip: result.persona.CIP,
        dni: result.persona.idDNI,
        apellidos: result.persona.Apellidos,
        nombres: result.persona.Nombres,
        condicion: result.persona.Condicion,
        fechaNacimiento: result.persona.FechaNac,
        sexo: result.persona.Sexo == "M" ? "MASCULINO" : "FEMENINO",
        image: result.image == "" || result.image == null ? "" : 'data:image/png;base64,' + result.image
      });
    } catch (error) {
      this.setState({ message: "Error de conexión del cliente, intente nuevamente en un par de minutos.", reload: true });
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

        <View style={styles.contenedorTitulo}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={icons.user}
              resizeMode='contain'
              style={{ width: 24, height: 24, tintColor: COLORS.black }} />
            <Text style={{ ...FONTS.h3, marginLeft: 5 }}>
              Perfil
            </Text>
          </View>
          <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => { }}>
              <Image
                source={icons.reload}
                resizeMode='contain'
                style={{ width: 24, height: 24, tintColor: COLORS.blue }} />
            </TouchableOpacity>
          </View>
        </View>

        {
          this.state.isLoading ?
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
            :
            (
              <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>

                  <View style={{ alignItems: 'center', padding: 20 }}>
                    <View style={styles.image_avatar}>
                      <Image
                        source={this.state.image == "" ? images.avatar : { uri: this.state.image }}
                        resizeMode="contain"
                        style={{ width: 160, height: 160, }} />
                    </View>
                  </View>

                  <View style={styles.itemContenedor}>
                    <View style={styles.itemDetalle}>
                      <View style={styles.itemText}>
                        <Text style={{ ...FONTS.h4, color: COLORS.black }}>N° CIP:</Text>
                      </View>
                      <View style={styles.itemText}>
                        <Text style={{ ...FONTS.h4, color: COLORS.secondary, }}>{this.state.cip}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.itemContenedor}>
                    <View style={styles.itemDetalle}>
                      <View style={styles.itemText}>
                        <Text style={{ ...FONTS.h4, color: COLORS.black }}>Condición:</Text>
                      </View>
                      <View style={styles.itemText}>
                        <Text style={{ ...FONTS.h4, color: COLORS.secondary, }}>{this.state.condicion}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.itemContenedor}>
                    <View style={styles.itemDetalle}>
                      <View style={styles.itemText}>
                        <Text style={{ ...FONTS.h4, color: COLORS.black }}>DNI:</Text>
                      </View>
                      <View style={styles.itemText}>
                        <Text style={{ ...FONTS.h4, color: COLORS.secondary, }}>{this.state.dni}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.itemContenedor}>
                    <View style={styles.itemDetalle}>
                      <View style={styles.itemText}>
                        <Text style={{ ...FONTS.h4, color: COLORS.black }}>Apellidos:</Text>
                      </View>
                      <View style={styles.itemText}>
                        <Text style={{ ...FONTS.h4, color: COLORS.secondary, }}>{this.state.apellidos}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.itemContenedor}>
                    <View style={styles.itemDetalle}>
                      <View style={styles.itemText}>
                        <Text style={{ ...FONTS.h4, color: COLORS.black }}>Nombres:</Text>
                      </View>
                      <View style={styles.itemText}>
                        <Text style={{ ...FONTS.h4, color: COLORS.secondary, }}>{this.state.nombres}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.itemContenedor}>
                    <View style={styles.itemDetalle}>
                      <View style={styles.itemText}>
                        <Text style={{ ...FONTS.h4, color: COLORS.black }}>Fecha de Nacimiento:</Text>
                      </View>
                      <View style={styles.itemText}>
                        <Text style={{ ...FONTS.h4, color: COLORS.secondary, }}>{this.state.fechaNacimiento}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.itemContenedor}>
                    <View style={styles.itemDetalle}>
                      <View style={styles.itemText}>
                        <Text style={{ ...FONTS.h4, color: COLORS.black }}>Sexo:</Text>
                      </View>
                      <View style={styles.itemText}>
                        <Text style={{ ...FONTS.h4, color: COLORS.secondary, }}>{this.state.sexo}</Text>
                      </View>
                    </View>
                  </View>

                </View>
              </ScrollView>
            )
        }

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 20
  },
  contenedorTitulo: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  image_avatar: {
    backgroundColor: COLORS.lightGray,
    padding: 5,
    borderWidth: 1,
    borderColor: '#C0CAD0',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.51,
    shadowRadius: 10,
    elevation: 1,
  },
  itemContenedor: {
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  itemDetalle: {
    width: '100%',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 3, },
    shadowOpacity: 0.51,
    shadowRadius: 10,
    elevation: 1
  },
  itemText: {


  },
  itemIcon: {
    tintColor: COLORS.secondary,
    marginHorizontal: 5,
    width: 18,
    height: 18
  }
});

const mapStateToProps = (state) => {
  return {
    token: state.personaReducer
  }
}


export default connect(mapStateToProps)(Perfil);
