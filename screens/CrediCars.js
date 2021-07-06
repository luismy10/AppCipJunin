import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { COLORS, SIZES, icons, FONTS, images } from '../constants';
import { connect } from 'react-redux';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";


class CrediCars extends React.Component {

    constructor(props) {
        super(props);

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

    _onChange = (formData) => {
        console.warn(formData)
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
                            Registrar Tarjeta
                        </Text>
                    </View>
                </View>

                <ScrollView>
                    <View style={{ flex: 1, paddingVertical: 10 }}>
                        <CreditCardInput
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
                            onChange={this._onChange}
                        />
                        <View style={{ backgroundColor: 'red', padding: 10 }}>
                            <TouchableOpacity style={{ backgroundColor: 'green' }} onPress={() => {
                                fetch('http://cipjunin.sytes.net/webCipJunin/app/api/login.php', {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        "usuario": "5252",
                                        "clave": "5252"
                                    })
                                }).then((response) => {
                                    return response.json();
                                }).then((result) => {
                                    console.warn(result);
                                }).catch((error) => {
                                    console.warn(error);
                                });
                            }}>
                                <Text>Button</Text>
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



export default CrediCars;


