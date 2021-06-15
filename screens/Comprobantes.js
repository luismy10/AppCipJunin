import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, icons, FONTS, images } from '../constants';

class Comprobantes extends React.Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

        <View style={styles.contenedorTitulo}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={icons.comprobantes}
              resizeMode='contain'
              style={{ width: 24, height: 24, tintColor: COLORS.black }} />
            <Text style={{ ...FONTS.h3, marginLeft: 5 }}>
              Consultar Documentos
            </Text>
          </View>
        </View>

        <View style={styles.container}>

          <View style={styles.box}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('EstadoCuenta')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={icons.search} style={styles.icon} />
                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>Est. Cuentas</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={icons.search} style={styles.icon} />
                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>Cert. Habilidad</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={icons.search} style={styles.icon} />
                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>Cert. Obra</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={icons.search} style={styles.icon} />
                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>Cert. Proyecto</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>

      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,

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
    minWidth: '70%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.gray,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 5, },
    shadowOpacity: 0.71,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
    marginRight: 10,
    tintColor: COLORS.primary
  }
});

export default Comprobantes;

