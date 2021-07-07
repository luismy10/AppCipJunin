import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { COLORS, SIZES, icons, FONTS, images } from '../constants';
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
            isCompletePay: false
        }
        // this.props.navigation.setOptions({
        //     title: 'Contáctenos',
        //     headerStyle: {
        //         backgroundColor: COLORS.primary,
        //     },
        //     headerTintColor: COLORS.white,
        //     headerTitleAlign: 'center',
        //     headerTitleStyle: {
        //         ...FONTS.h3,
        //         fontWeight: 'bold',
        //         textAlignVertical: 'center',
        //         flex: 1,
        //     },
        // });
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
                this.setState({ isVisibleNumber: false, isVisibleExpiry: false, isVisibleCvc: false, isVisibleName: false, isCompletePay: true });
            }
        }
    }

    onValidateCard = () => {
        if (this.state.dataCredicars != null) {
            let card = this.state.dataCredicars;
            console.warn(card)
        }
        // console.warn(this.state.dataCredicars.valid);
        // console.warn(this.state.dataCredicars.values);
        // console.warn(this.state.dataCredicars.status);




        // fetch('http://cipjunin.sytes.net/webCipJunin/app/api/login.php', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         "usuario": "5252",
        //         "clave": "5252"
        //     })
        // }).then((response) => {
        //     return response.json();
        // }).then((result) => {
        //     console.warn(result);
        // }).catch((error) => {
        //     console.warn(error);
        // });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
                <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />


                <View style={styles.contenedorTitulo}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={icons.pay}
                            resizeMode='contain'
                            style={{ width: 24, height: 24, tintColor: COLORS.black }} />
                        <Text style={{ ...FONTS.h3, marginLeft: 5 }}>
                            Realizar Pago
                        </Text>
                    </View>
                </View>


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
                    </ScrollView>
                </View>
                {
                    this.state.isCompletePay ?
                        <View style={{ backgroundColor: COLORS.primary }}>
                            <TouchableOpacity style={{ padding: 20, }} onPress={() => this.onValidateCard()}>
                                <Text style={{ color: COLORS.white, textAlign: 'center' }}>PAGAR S/ 10.00</Text>
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



export default CrediCars;


