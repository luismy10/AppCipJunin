import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, Image, TouchableOpacity, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import { COLORS, SIZES, icons, FONTS, URL } from '../constants';
import { formatMoney, nombreMes } from "./tools/Tools";
import { connect } from 'react-redux';
import { CreditCardInput } from "react-native-credit-card-input";

class CrediCars extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataCredicars: null,
            isVisibleNumber: true,
            isVisibleExpiry: false,
            isVisibleCvc: false,
            isVisibleName: false,
            isCompletePay: false,
            isFocus: false,
            isLoading: false,
            montoTotal: 0,
            cuotasInicio: "",
            cuotasFin: ""
        }
        this.props.navigation.setOptions({
            title: 'Registrar Tarjeta',
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

    onEventLeft = () => {
        if (this.state.dataCredicars != null) {
            let card = this.state.dataCredicars;
            if (this.state.isVisibleExpiry) {
                this.setState({ isVisibleExpiry: false, isVisibleCvc: false, isVisibleName: false, isCompletePay: false, isVisibleNumber: true });
            } else if (this.state.isVisibleCvc) {
                this.setState({ isVisibleCvc: false, isVisibleName: false, isVisibleNumber: false, isCompletePay: false, isVisibleExpiry: true });
            } else if (this.state.isVisibleName) {
                this.setState({ isVisibleNumber: false, isVisibleExpiry: false, isVisibleName: false, isCompletePay: false, isVisibleCvc: true });
            } else if (this.state.isCompletePay) {
                this.setState({ isVisibleNumber: false, isVisibleExpiry: false, isVisibleCvc: false, isCompletePay: false, isVisibleName: true });
            }
        }
    }

    onEventRight = () => {
        if (this.state.dataCredicars != null) {
            let card = this.state.dataCredicars;
            if (this.state.isVisibleNumber && card.status.number == "valid") {
                this.setState({ isVisibleNumber: false, isVisibleCvc: false, isVisibleName: false, isCompletePay: false, isVisibleExpiry: true });
            } else if (this.state.isVisibleExpiry && card.status.expiry == "valid") {
                this.setState({ isVisibleNumber: false, isVisibleExpiry: false, isVisibleName: false, isCompletePay: false, isVisibleCvc: true });
            } else if (this.state.isVisibleCvc && card.status.cvc == "valid") {
                this.setState({ isVisibleNumber: false, isVisibleExpiry: false, isVisibleCvc: false, isCompletePay: false, isVisibleName: true });
            } else if (this.state.isVisibleName && card.status.name == "valid") {
                let data = this.props.route.params.cuotas;
                let monto = 0;
                for (item of data) {
                    for (let c of item.concepto) {
                        monto += parseFloat(c.Precio);
                    }
                }
                let montoTotal = 0;
                montoTotal += parseFloat(monto);

                let porcetaje = 4.20 / 100; //0.042
                let montoAum =
                    montoTotal > 0 && montoTotal <= 50 ?
                        montoTotal + 0.5 :
                        montoTotal > 50 && montoTotal <= 100 ?
                            montoTotal + 1 :
                            montoTotal > 100 && montoTotal <= 500 ?
                                montoTotal + 1.50 :
                                montoTotal > 500 && montoTotal <= 1000 ?
                                    montoTotal + 2 :
                                    montoTotal + 3;
                let igvp = 18;
                let comision = montoAum * porcetaje; //4.20
                let igv = comision * (igvp / 100); //0.756
                let total = Math.round(montoAum + comision + igv);

                let cuotasInicio = data[0].year + "-" + data[0].mes + "-" + data[0].day;
                let cuotasFin = data[data.length - 1].year + "-" + data[data.length - 1].mes + "-" + data[data.length - 1].day;

                this.setState({
                    isVisibleNumber: false,
                    isVisibleExpiry: false,
                    isVisibleCvc: false,
                    isVisibleName: false,
                    isCompletePay: true,
                    montoTotal: total,
                    cuotasInicio: cuotasInicio,
                    cuotasFin: cuotasFin
                });
            } else {
                if (this.state.isVisibleNumber) {
                    Alert.alert("Información", "El número de tarjeta no es correcto.");
                } else if (this.state.isVisibleExpiry) {
                    Alert.alert("Información", "La fecha de experación no es correcta.");
                } else if (this.state.isVisibleCvc) {
                    Alert.alert("Información", "El CVC/CCV no es correcto.");
                } else {
                    Alert.alert("Información", "Ingrese el titular de la tarjeta.");
                }
            }
        } else {
            Alert.alert("Información", "Ingrese el número de tarjeta.");
        }
    }

    async onValidateCard() {
        if (this.state.dataCredicars != null) {
            let card = this.state.dataCredicars;
            if (card.valid) {
                var array = card.values.expiry.split("/");
                this.props.navigation.navigate('ConfirmarPago',
                    {
                        "card_number": card.values.number.replace(/ /g, ""),
                        "cvv": card.values.cvc,
                        "expiration_month": array[0],
                        "expiration_year": array[1],
                        "email": "roco10@hotmail.com",
                        "monto": formatMoney(this.state.montoTotal),
                        "cuotas": this.props.route.params.cuotas,
                        "cuotasInicio": this.state.cuotasInicio,
                        "cuotasFin": this.state.cuotasFin
                    });
            }
        }
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
                            Realizar Pago
                        </Text>
                    </View>
                    <View>
                        <Text style={{ ...FONTS.h3 }}>S/ {this.props.route.params.monto}</Text>
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


                <View style={{ flex: 1, paddingVertical: 10, }}>
                    <ScrollView>
                        <CreditCardInput
                            iconLeftButton={icons.back}
                            iconRightButton={icons.chevron}
                            onEventLeft={this.onEventLeft}
                            onEventRight={this.onEventRight}
                            isVisibleNumber={this.state.isVisibleNumber}
                            isVisibleExpiry={this.state.isVisibleExpiry}
                            isVisibleCvc={this.state.isVisibleCvc}
                            isVisibleName={this.state.isVisibleName}
                            isCompletePay={this.state.isCompletePay}
                            labels={{ number: "NÚMERO DE TARJETA", expiry: "EXPIRA", cvc: "CVC/CCV", name: "INGRESE SUS DATOS" }}
                            placeholders={{ number: "1234 5678 1234 5678", expiry: "MM/YY", cvc: "CVC", name: "NOMBRE" }}
                            requiresName={true}
                            labelStyle={{ ...FONTS.h4, color: COLORS.black }}
                            inputStyle={{
                                ...FONTS.h3,
                            }}
                            inputContainerStyle={{
                                borderBottomWidth: 2,
                                borderBottomColor: '#C1BFBF'
                            }}
                            onChange={(data) => { this.setState({ dataCredicars: data }) }}
                        />
                        <View style={{
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            alignItems: 'center'
                        }}>
                            <Text style={{ ...FONTS.h3, color: COLORS.secondary, textAlign: 'center' }}>SE LE VA COBRAR UN CARGO ADICIONAL AL MONTO TOTAL POR TRANSACCIÓN.</Text>
                        </View>
                    </ScrollView>
                </View>
                {
                    this.state.isCompletePay ?
                        <View style={{ backgroundColor: COLORS.primary }}>
                            <TouchableOpacity style={{ padding: 20, }} onPress={() => this.onValidateCard()}>
                                <Text style={{ ...FONTS.h3, color: COLORS.white, textAlign: 'center' }}>PAGAR S/ {formatMoney(this.state.montoTotal)}</Text>
                            </TouchableOpacity>
                        </View>
                        : null
                }
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

export default connect(mapStateToProps)(CrediCars);


