import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, Image, SafeAreaView, TouchableOpacity ,ActivityIndicator} from 'react-native';
import { COLORS, SIZES, icons, FONTS, URL } from '../constants';
import { getDateFormaMMYY } from "./tools/Tools";
import { connect } from 'react-redux';

class ConfirmarPago extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:false,
            token: JSON.parse(this.props.token.userToken),
        }
        this.props.navigation.setOptions({
            title: 'Confirmar Pago',
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

    async onEventConfirmarPago() {
        this.setState({ isLoading: true });
        try {
            let response = await fetch(URL.REGISTRAR_PAGO, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "card_number": this.props.route.params.card_number,
                    "cvv": this.props.route.params.cvv,
                    "expiration_month": this.props.route.params.expiration_month,
                    "expiration_year": this.props.route.params.expiration_year,
                    "email": this.props.route.params.email,
                    "monto": this.props.route.params.monto,
                    "idPersona": this.state.token.idDNI,
                    "estado": 'C',
                    "estadoCuotas": true,
                    "cuotas": this.props.route.params.cuotas,
                    "cuotasInicio": this.props.route.params.cuotasInicio,
                    "cuotasFin": this.props.route.params.cuotasFin
                })
            });

            let result = await response.json();
            if (result.estado == 1) {
                this.props.navigation.navigate('RespuestaPago',{
                    "estado":1,
                    "message":result.message,
                    "monto":this.props.route.params.monto
                });
                this.setState({ isLoading: false });
            } else {
                this.props.navigation.navigate('RespuestaPago',{
                    "estado":0,
                    "message":result.message,
                    "monto":0
                });
                this.setState({ isLoading: false });
            }     
        } catch (error) {
            this.props.navigation.navigate('RespuestaPago',{
                "estado":0,
                "message":"Error de conexión del cliente, intente nuevamente en un par de minutos.",
                "monto":0
            });
            this.setState({ isLoading: false });
        }
    }

    onEventCancelarPago = () => {
        this.props.navigation.navigate('Servicios');
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
                <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

                <View style={styles.contenedorTitulo}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image
                            source={icons.pay}
                            resizeMode='contain'
                            style={{ width: 24, height: 24, tintColor: COLORS.black }} />
                        <Text style={{ ...FONTS.h3, marginLeft: 5 }}>
                            Validar Información
                        </Text>
                    </View>
                </View>

                {
                    this.state.isLoading ?
                        <View style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center', left: 0, top: 0, zIndex: 20 }}>
                            <View style={{ backgroundColor: 'white', width: '50%' }}>
                                <View style={{ padding: 10, alignItems: 'center' }}>
                                    <ActivityIndicator size="large" color={COLORS.primary} />
                                    <Text style={{ ...FONTS.h3, color: COLORS.secondary, textAlign: 'center' }}>Procesando Transacción..</Text>
                                </View>
                            </View>
                        </View>
                        : null
                }

                <ScrollView>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                        <View style={{ borderColor: COLORS.gray, borderWidth: 1, backgroundColor: COLORS.white, padding: 10 }}>
                            <Text style={{ ...FONTS.h4, color: COLORS.grayDark }}>PAGO DE CUOTAS</Text>
                            <Text style={{ ...FONTS.h3, color: COLORS.secondary }}>DEL {getDateFormaMMYY(this.props.route.params.cuotasInicio)} AL {getDateFormaMMYY(this.props.route.params.cuotasFin)}</Text>
                        </View>
                        <View style={{ borderColor: COLORS.gray, borderWidth: 1, backgroundColor: COLORS.white, padding: 10 }}>
                            <Text style={{ ...FONTS.h4, color: COLORS.grayDark }}>TARJETA</Text>
                            <Text style={{ ...FONTS.h3, color: COLORS.secondary }}>{this.props.route.params.card_number}</Text>
                        </View>
                        <View style={{ borderColor: COLORS.gray, borderWidth: 1, backgroundColor: COLORS.white, padding: 10 }}>
                            <Text style={{ ...FONTS.h4, color: COLORS.grayDark }}>EXPIRACIÓN</Text>
                            <Text style={{ ...FONTS.h3, color: COLORS.secondary }}>{this.props.route.params.expiration_month}/{this.props.route.params.expiration_year}</Text>
                        </View>
                        <View style={{ borderColor: COLORS.gray, borderWidth: 1, backgroundColor: COLORS.white, padding: 10 }}>
                            <Text style={{ ...FONTS.h4, color: COLORS.grayDark }}>CVC/CCV</Text>
                            <Text style={{ ...FONTS.h3, color: COLORS.secondary }}>{this.props.route.params.cvv}</Text>
                        </View>
                        <View style={{ borderColor: COLORS.gray, borderWidth: 1, backgroundColor: COLORS.white, padding: 10 }}>
                            <Text style={{ ...FONTS.h4, color: COLORS.grayDark }}>EMAIL</Text>
                            <Text style={{ ...FONTS.h3, color: COLORS.secondary }}>{this.props.route.params.email}</Text>
                        </View>
                        <View style={{ borderColor: COLORS.gray, borderWidth: 1, backgroundColor: COLORS.white, padding: 10 }}>
                            <Text style={{ ...FONTS.h4, color: COLORS.grayDark }}>MONTO</Text>
                            <Text style={{ ...FONTS.h2, color: COLORS.green }}>S/ {this.props.route.params.monto}</Text>
                        </View>
                        <View style={{ borderColor: COLORS.gray, borderWidth: 1, backgroundColor: COLORS.white, padding: 10 }}>
                            <Text>Verifique sus datos antes de continuar; una ves realizado el pago, anularlo toma varios días.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                            <TouchableOpacity
                                style={{ flexDirection: 'row', backgroundColor: COLORS.primary, alignItems: 'center', paddingHorizontal: 13, paddingVertical: 8 }}
                                onPress={this.onEventCancelarPago}>
                                <Image
                                    source={icons.minus}
                                    style={{
                                        width: 14,
                                        height: 14,
                                        margin: 5,
                                        tintColor: COLORS.white,
                                        resizeMode: 'stretch',
                                    }}
                                />
                                <Text style={{ ...FONTS.h4, color: COLORS.white }}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ flexDirection: 'row', backgroundColor: COLORS.green, alignItems: 'center', paddingHorizontal: 13, paddingVertical: 8 }}
                                onPress={()=>{this.onEventConfirmarPago()}}>
                                <Image
                                    source={icons.plus}
                                    style={{
                                        width: 14,
                                        height: 14,
                                        margin: 5,
                                        tintColor: COLORS.white,
                                        resizeMode: 'stretch',
                                    }}
                                />
                                <Text style={{ ...FONTS.h4, color: COLORS.white }}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView >
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
});

const mapStateToProps = (state) => {
    return {
        token: state.personaReducer
    }
}

export default connect(mapStateToProps)(ConfirmarPago);


