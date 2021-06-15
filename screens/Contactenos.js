import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { COLORS, SIZES, icons, FONTS, images } from '../constants';
import { connect } from 'react-redux';

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

  onEventCloseSession = async () => {
    try {
      await SecureStorage.removeItem('user');
      this.props.removeToken();
    } catch (e) {
      this.props.removeToken();
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

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

            <View style={{ padding: 20, alignItems: 'center' }}>
              <Image source={images.logoCIPColor} style={{ width: 120, height: 120 }} />
            </View>

            <View style={styles.itemContenedor}>
              <View style={styles.itemDetalle}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={icons.plus}
                    resizeMode='contain'
                    style={styles.itemIcon} />
                  <Text style={{ ...FONTS.h4, color: COLORS.black }}>R.U.C.:</Text>
                </View>
              </View>
              <View style={styles.itemDetalle}>
                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>20191899963</Text>
              </View>
            </View>

            <View style={styles.itemContenedor}>
              <View style={styles.itemDetalle}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={icons.company}
                    resizeMode='contain'
                    style={styles.itemIcon} />
                  <Text style={{ ...FONTS.h4, color: COLORS.black }}>Razón Social:</Text>
                </View>
              </View>
              <View style={styles.itemDetalle}>
                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>Colegio de Ingenieros del Perú - Consejo departamental Junín</Text>
              </View>
            </View>

            <View style={styles.itemContenedor}>
              <View style={styles.itemDetalle}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={icons.email}
                    resizeMode='contain'
                    style={styles.itemIcon} />
                  <Text style={{ ...FONTS.h4, color: COLORS.black }}>Correo Electrónico:</Text>
                </View>
              </View>
              <View style={styles.itemDetalle}>
                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>secretaria@cip-junin.org.pe</Text>
              </View>
            </View>

            <View style={styles.itemContenedor}>
              <View style={styles.itemDetalle}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={icons.time}
                    resizeMode='contain'
                    style={styles.itemIcon} />
                  <Text style={{ ...FONTS.h4, color: COLORS.black }}>Horario de atención:</Text>
                </View>
              </View>
              <View style={styles.itemDetalle}>
                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>De lunes a viernes de 09:00 a.m. a 06:00 p.m.</Text>
              </View>
            </View>

            <View style={styles.itemContenedor}>
              <View style={styles.itemDetalle}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={icons.maps}
                    resizeMode='contain'
                    style={styles.itemIcon} />
                  <Text style={{ ...FONTS.h4, color: COLORS.black }}>Dirección:</Text>
                </View>
              </View>
              <View style={styles.itemDetalle}>
                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>AV. CENTENARIO NRO. 604 (COSTADO DE LA IGLESIA PICHICUS) JUNIN - HUANCAYO - HUANCAYO</Text>
              </View>
            </View>


            <View style={styles.itemContenedor}>
              <View style={styles.itemDetalle}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={icons.phone}
                    resizeMode='contain'
                    style={styles.itemIcon} />
                  <Text style={{ ...FONTS.h4, color: COLORS.black }}>Celular/Teléfono:</Text>
                </View>
              </View>
              <View style={styles.itemDetalle}>
                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>(064) - 203033</Text>
              </View>
            </View>

            <View style={styles.itemContenedor}>
              <View style={styles.itemDetalle}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={icons.domain}
                    resizeMode='contain'
                    style={styles.itemIcon} />
                  <Text style={{ ...FONTS.h4, color: COLORS.black }}>Pagina Web:</Text>
                </View>
              </View>
              <View style={styles.itemDetalle}>
                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>www.cip-junin.org.pe</Text>
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
  itemContenedor: {
    width: '100%',
    flexDirection: 'row'
  },
  itemDetalle: {
    width: '50%',
    padding: 10
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

export default connect(mapStateToProps)(Contactenos);


