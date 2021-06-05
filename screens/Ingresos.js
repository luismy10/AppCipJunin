import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { COLORS, SIZES, icons, FONTS, images } from '../constants';

class Ingresos extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.navigation.setOptions({
      title: 'Estados de Cuenta',
      headerStyle: {
        backgroundColor: COLORS.primary,
      },
      headerTintColor: COLORS.white,
      headerTitleStyle: {
        ...FONTS.h4,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={icons.back} style={{ width: 20, height: 20, tintColor: COLORS.white }} />
          <Text style={{ ...FONTS.h4, color: COLORS.white }}>Regresar</Text>
        </TouchableOpacity>
      ),
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

        <View
          style={{
            backgroundColor: COLORS.white,
            height: 35,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View style={{ width: '60%' }}>
              <Text style={{ fontWeight: 'bold' }}>
                01/04/2020 - 04/04/2021
              </Text>
            </View>
            <View style={{ width: '40%' }}>
              <Text style={{ fontWeight: 'bold', alignSelf: 'flex-end' }}>
                Total: S/ 2440.00
              </Text>
            </View>
          </View>
        </View>

        <ScrollView
          style={{ flex: 1, backgroundColor: COLORS.lightGray }}
          showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={{ paddingLeft: 20 }}>
              <View
                style={{
                  alignItems: 'center',
                  width: SIZES.width * 0.9,
                  paddingTop: 20,
                }}>
                <View style={styles.box}>
                  <View style={{ width: '50%' }}>
                    <View style={styles.cabecera}>
                      <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>
                        Fct: F001-001234
                      </Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Fecha: 16/06/2020</Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Documento: FACTURA</Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Total: 3,30.00</Text>
                    </View>
                  </View>
                  <View style={{ width: '50%' }}>
                    <View style={styles.estadoDocumento}>
                      <Text>Pagado</Text>
                    </View>
                    <View style={styles.exportPdf}>
                      <Image
                        style={{ width: 25, height: 30 }}
                        source={icons.documentPdf}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.box}>
                  <View style={{ width: '50%' }}>
                    <View style={styles.cabecera}>
                      <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>
                        Fct: F001-001234
                      </Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Fecha: 16/06/2020</Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Documento: FACTURA</Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Total: 3,30.00</Text>
                    </View>
                  </View>
                  <View style={{ width: '50%' }}>
                    <View style={styles.estadoDocumento}>
                      <Text>Pagado</Text>
                    </View>
                    <View style={styles.exportPdf}>
                      <Image
                        style={{ width: 25, height: 30 }}
                        source={icons.documentPdf}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.box}>
                  <View style={{ width: '50%' }}>
                    <View style={styles.cabecera}>
                      <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>
                        Fct: F001-001234
                      </Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Fecha: 16/06/2020</Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Documento: FACTURA</Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Total: 3,30.00</Text>
                    </View>
                  </View>
                  <View style={{ width: '50%' }}>
                    <View style={styles.estadoDocumento}>
                      <Text>Pagado</Text>
                    </View>
                    <View style={styles.exportPdf}>
                      <Image
                        style={{ width: 25, height: 30 }}
                        source={icons.documentPdf}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.box}>
                  <View style={{ width: '50%' }}>
                    <View style={styles.cabecera}>
                      <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>
                        Fct: F001-001234
                      </Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Fecha: 16/06/2020</Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Documento: FACTURA</Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Total: 3,30.00</Text>
                    </View>
                  </View>
                  <View style={{ width: '50%' }}>
                    <View style={styles.estadoDocumento}>
                      <Text>Pagado</Text>
                    </View>
                    <View style={styles.exportPdf}>
                      <Image
                        style={{ width: 25, height: 30 }}
                        source={icons.documentPdf}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.box}>
                  <View style={{ width: '50%' }}>
                    <View style={styles.cabecera}>
                      <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>
                        Fct: F001-001234
                      </Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Fecha: 16/06/2020</Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Documento: FACTURA</Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Total: 3,30.00</Text>
                    </View>
                  </View>
                  <View style={{ width: '50%' }}>
                    <View style={styles.estadoDocumento}>
                      <Text>Pagado</Text>
                    </View>
                    <View style={styles.exportPdf}>
                      <Image
                        style={{ width: 25, height: 30 }}
                        source={icons.documentPdf}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.box}>
                  <View style={{ width: '50%' }}>
                    <View style={styles.cabecera}>
                      <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>
                        Fct: F001-001234
                      </Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Fecha: 16/06/2020</Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Documento: FACTURA</Text>
                    </View>
                    <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                      <Text>Total: 3,30.00</Text>
                    </View>
                  </View>
                  <View style={{ width: '50%' }}>
                    <View style={styles.estadoDocumento}>
                      <Text>Pagado</Text>
                    </View>
                    <View style={styles.exportPdf}>
                      <Image
                        style={{ width: 25, height: 30 }}
                        source={icons.documentPdf}
                      />
                    </View>
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
  },
  box: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: -1, height: 5 },
    shadowOpacity: 0.71,
    shadowRadius: 10,
    elevation: 5,
  },
  cabecera: {
    width: '80%',
    height: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  estadoDocumento: {
    backgroundColor: '#68E55D',
    borderRadius: 10,
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    top: 10,
    marginBottom: 20,
  },
  exportPdf: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignSelf: 'flex-end',
    padding: 15,
    marginHorizontal: 10,
  },
});

export default Ingresos;
