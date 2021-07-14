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

          <View style={styles.box1}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('EstadoCuenta')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={icons.cuenta} style={styles.icon1} />
                <Text style={{ ...FONTS.h4, color: COLORS.white }}>Est. Cuentas</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>                
                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>Cert. Habilidad</Text>
                <Image source={icons.certHabilidad} style={styles.icon} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.box1}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={icons.certObra} style={styles.icon1} />
                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>Cert. Obra</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>                
                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>Cert. Proyecto</Text>
                <Image source={icons.certProyecto} style={styles.icon} />
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
  box1: {
    minWidth: '70%',
    backgroundColor: "#F06B5C",
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#F04734",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 5, },
    shadowOpacity: 0.71,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
    borderRadius:25,
  },
  box: {
    minWidth: '70%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 30,
    paddingVertical: 15,
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
    borderRadius:25,
  },
  icon1: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
    marginRight: 50,
    tintColor: COLORS.white
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
    marginLeft: 50,
    tintColor: COLORS.primary
  }
});

export default Comprobantes;

