import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, Image, SafeAreaView } from 'react-native';
import { COLORS, SIZES, icons, FONTS, images } from '../constants';
import SecureStorage from 'react-native-secure-storage';
import { connect } from 'react-redux';
import { signOut } from '../screens/actions/persona';
import HeaderTab from './components/HeaderTab';

class Contactenos extends React.Component {

  constructor(props) {
    super(props);
    this.props.navigation.setOptions({
      title: 'Contáctenos',
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
      },
    });
  }

  componentDidMount() {

  }

  onEventCloseSession = async () => {
    try {
      await SecureStorage.removeItem('user');
      this.props.removeToken();
    } catch (e) {
      this.props.removeToken();
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
        <HeaderTab onEventCloseSession={this.onEventCloseSession} />

        <View style={styles.contenedorTitulo}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={icons.contactanos}
              resizeMode='contain'
              style={{ width: 24, height: 24, tintColor: COLORS.black }} />
            <Text style={{ ...FONTS.h3, marginLeft: 5 }}>
              Directorio Institucional
            </Text>
          </View>
        </View>

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>

            <View style={{ paddingBottom: 20, width: SIZES.width, height: SIZES.height * 0.25 }}>
              <Image source={images.colegio} resizeMode='cover' style={{ width: SIZES.width, height: SIZES.height * 0.25 }} />
            </View>

            <View style={{ width: '100%', padding: 20 }}>
              <View style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>

                <View style={styles.itemContenedor}>
                  <View style={styles.itemDetalle}>
                    <Text style={styles.itemTextIcon}>
                      <Image
                        source={icons.plus}
                        resizeMode='contain'
                        style={styles.itemIcon} /> R.U.C.:</Text>
                  </View>
                  <View style={styles.itemDetalle}>
                    <Text style={styles.itemText}>20191899963</Text>
                  </View>
                </View>

                <View style={styles.itemContenedor}>
                  <View style={styles.itemDetalle}>
                    <Text style={styles.itemTextIcon}><Image
                      source={icons.company}
                      resizeMode='contain'
                      style={styles.itemIcon} /> Razón Social:</Text>
                  </View>
                  <View style={styles.itemDetalle}>
                    <Text style={styles.itemText}>Colegio de Ingenieros del Perú - Consejo departamental Junín</Text>
                  </View>
                </View>

                <View style={styles.itemContenedor}>
                  <View style={styles.itemDetalle}>
                    <Text style={styles.itemTextIcon}>
                      <Image
                        source={icons.email}
                        resizeMode='contain'
                        style={styles.itemIcon} /> Correo Electrónico:</Text>
                  </View>
                  <View style={styles.itemDetalle}>
                    <Text style={styles.itemText}>secretaria@cip-junin.org.pe</Text>
                  </View>
                </View>

                <View style={styles.itemContenedor}>
                  <View style={styles.itemDetalle}>
                    <Text style={styles.itemTextIcon}><Image
                      source={icons.time}
                      resizeMode='contain'
                      style={styles.itemIcon} /> Horario de atención:</Text>
                  </View>
                  <View style={styles.itemDetalle}>
                    <Text style={styles.itemText}>De lunes a viernes de 09:00 a.m. a 06:00 p.m.</Text>
                  </View>
                </View>

                <View style={styles.itemContenedor}>
                  <View style={styles.itemDetalle}>
                    <Text style={styles.itemTextIcon}><Image
                      source={icons.maps}
                      resizeMode='contain'
                      style={styles.itemIcon} /> Dirección:</Text>
                  </View>
                  <View style={styles.itemDetalle}>
                    <Text style={styles.itemText}>AV. CENTENARIO NRO. 604 (COSTADO DE LA IGLESIA PICHICUS) JUNIN - HUANCAYO - HUANCAYO</Text>
                  </View>
                </View>

                <View style={styles.itemContenedor}>
                  <View style={styles.itemDetalle}>
                    <Text style={styles.itemTextIcon}><Image
                      source={icons.phone}
                      resizeMode='contain'
                      style={styles.itemIcon} /> Celular/Teléfono:</Text>
                  </View>
                  <View style={styles.itemDetalle}>
                    <Text style={styles.itemText}>(064) - 203033</Text>
                  </View>
                </View>

                <View style={styles.itemContenedor}>
                  <View style={styles.itemDetalle}>
                    <Text style={styles.itemTextIcon}><Image
                      source={icons.domain}
                      resizeMode='contain'
                      style={styles.itemIcon} /> Pagina Web:</Text>
                  </View>
                  <View style={styles.itemDetalle}>
                    <Text style={styles.itemText}>www.cip-junin.org.pe</Text>
                  </View>
                </View>

              </View>
            </View>

          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 10
  },
  contenedorTitulo: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  itemContenedor: {
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: SIZES.padding,
    paddingVertical: 5,
  },
  itemDetalle: {
    width: '100%',
    paddingVertical: 5
  },
  itemIcon: {
    tintColor: COLORS.grayDark,
    marginHorizontal: 5,
    width: 18,
    height: 18
  },
  itemTextIcon: {
    ...FONTS.h4,
    color: COLORS.grayDark,
  },
  itemText: {
    ...FONTS.h4,
    color: COLORS.black,
  }
});

const mapStateToProps = (state) => {
  return {
    token: state.personaReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeToken: () => dispatch(signOut())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Contactenos);
// export default Contactenos;


