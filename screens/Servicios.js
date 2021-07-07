import React from 'react';
import { Image, Text, View, StyleSheet, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, icons, FONTS, images } from '../constants';
import { connect } from 'react-redux';

class Servicios extends React.Component {

    constructor(props) {
        super(props);
    }

    onEventPagoCuota = () => {
        this.props.navigation.navigate('PagoCuota')
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
                <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

                <View style={styles.contenedorTitulo}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={icons.services}
                            resizeMode='contain'
                            style={{ width: 24, height: 24, tintColor: COLORS.black }} />
                        <Text style={{ ...FONTS.h3, marginLeft: 5 }}>
                            Servicios
                        </Text>
                    </View>
                </View>

                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>

                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                            <TouchableOpacity style={styles.box} onPress={this.onEventPagoCuota}>
                                <Image source={icons.seed} style={{ width: 24, height: 24, tintColor: COLORS.primary }} />
                                <Text style={{ ...FONTS.h4, color: COLORS.secondary, textAlign: 'center' }}>Pagar Cuota Sociales</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.box}>
                                <Image source={icons.seed} style={{ width: 24, height: 24, tintColor: COLORS.primary }} />
                                <Text style={{ ...FONTS.h4, color: COLORS.secondary, textAlign: 'center' }}>Cert. de Habilidad</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.box}>
                                <Image source={icons.seed} style={{ width: 24, height: 24, tintColor: COLORS.primary }} />
                                <Text style={{ ...FONTS.h4, color: COLORS.secondary, textAlign: 'center' }}>Cert. de Obra</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.box}>
                                <Image source={icons.seed} style={{ width: 24, height: 24, tintColor: COLORS.primary }} />
                                <Text style={{ ...FONTS.h4, color: COLORS.secondary, textAlign: 'center' }}>Cert. de Proyecto</Text>
                            </TouchableOpacity>

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
        justifyContent: 'center',
        alignItems: 'center',
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
    box: {
        maxWidth: 140,
        minWidth: 140,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
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
        margin: 20,
    },
});


const mapStateToProps = (state) => {
    return {
        token: state.personaReducer
    }
}


export default connect(mapStateToProps)(Servicios);