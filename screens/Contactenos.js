import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, Image, Linking, SafeAreaView } from 'react-native';
import { COLORS, SIZES, icons, FONTS, images } from '../constants';

class Contactenos extends React.Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightGray }} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>

            <View style={{ paddingBottom: 20, width: '100%', height: SIZES.height * 0.25 }}>
              <Image source={images.colegio} style={{width:'100%'}} />
            </View>

            <View style={{ backgroundColor: COLORS.white, white: SIZES * 0.8, margin: 20, borderRadius: 20 }}>

              <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                <View style={{ width: '50%' }}>
                  <Text>Razón Social: </Text>
                </View>
                <View style={{ width: '50%' }}>
                  <Text>Colegio de Ingenieros del Perú - Consejo departamental Junín</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                <View style={{ width: '50%' }}>
                  <Text>R.U.C.: </Text>
                </View>
                <View style={{ width: '50%' }}>
                  <Text>12345678925</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                <View style={{ width: '50%' }}>
                  <Text>Correo Mesa Parte: </Text>
                </View>
                <View style={{ width: '50%' }}>
                  <Text>mesadepartes.cn@cip.org.pe</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                <View style={{ width: '50%' }}>
                  <Text>Horario de atención: </Text>
                </View>
                <View style={{ width: '50%' }}>
                  <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>De lunes a viernes de 09:00 a.m. a 06:00 p.m.</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                <View style={{ width: '50%' }}>
                  <Text>Dirección: </Text>
                </View>
                <View style={{ width: '50%' }}>
                  <Text>Av. Arequipa Nº 4947, Miraflores, Lima – Perú</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                <View style={{ width: '50%' }}>
                  <Text>Correo Mesa Parte: </Text>
                </View>
                <View style={{ width: '50%' }}>
                  <Text>mesadepartes.cn@cip.org.pe</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                <View style={{ width: '50%' }}>
                  <Text>Celular Mesa Parte: </Text>
                </View>
                <View style={{ width: '50%' }}>
                  <Text onPress={() => { Linking.openURL('tel:+51 939357540'); }} style={{ fontWeight: 'bold' }}>(+51) 939357540</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                <View style={{ width: '50%' }}>
                  <Text>Pagina Web: </Text>
                </View>
                <View style={{ width: '50%' }}>
                  <Text>www.cipjunin.com.pe</Text>
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
    paddingVertical: 20
  },
});

export default Contactenos;


