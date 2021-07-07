import React from 'react';
import { Image, Text, View, StyleSheet, SafeAreaView, StatusBar, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { COLORS, SIZES, icons, FONTS, URL, images } from '../constants';
import CheckBox from '@react-native-community/checkbox';
import { formatMoney, nombreMes } from "./tools/Tools";
import { connect } from 'react-redux';

class PagoCuota extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: true,
            token: JSON.parse(this.props.token.userToken),
            isLoading: false,
            reload: false,
            message: 'Cargando cuotas...',
            cuotas: [],
            totalCuotas: 0,
            countCurrentDate: 0,
            yearCurrentView: "",
            monthCurrentView: ""
        }
        this.props.navigation.setOptions({
            title: 'Pagar Cuota Sociales',
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
            }
        });
    }

    onEventAgregarCuota = () => {
        this.setState({ countCurrentDate: 1 }, () => {
            this.loadCuotas();
        });
    }

    componentDidMount() {
        this.loadCuotas();
    }

    async loadCuotas() {
        this.setState({ isLoading: true, reload: false, message: 'Cargando cuotas...', cuotas: [] });
        try {
            let response = await fetch(URL.PAGOS_CUOTAS, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "idDni": this.state.token.idDNI,
                    "mes": this.state.countCurrentDate,
                    "yearCurrentView": this.state.yearCurrentView,
                    "monthCurrentView": this.state.monthCurrentView
                })
            });
            let result = await response.json();
            if (result.state == 1) {
                let monto = 0;
                for (item of result.data) {
                    for (let c of item.concepto) {
                        monto += parseFloat(c.Precio);
                    }
                }
                let montoTotal = 0;
                montoTotal += parseFloat(monto);
                let y = "";
                let m = "";
                if (result.data.length > 0) {
                    y = result.data[result.data.length - 1].year;
                    m = result.data[result.data.length - 1].mes;
                }
                this.setState({ isLoading: false, message: '', cuotas: result.data, totalCuotas: montoTotal, yearCurrentView: y, monthCurrentView: m });

                console.warn(result)
            } else {
                this.setState({ isLoading: false, message: result.message });
            }
        } catch (error) {
            this.setState({ isLoading: false, message: 'Error de conexión del cliente, intente nuevamente en un par de minutos.' });
            console.warn(error);
        }
    }

    selectCheck = (value, index) => {
        console.warn(index);
        // for (let c of this.state.cuotas) {
        //     console.warn(c);
        // }
        // let nmroCheckbox = index;
        // while (this.state.cuotas.length >= nmroCheckbox) {
        //     if ($("#" + nmroCheckbox).prop('checked')) {
        //         //         $("#" + nmroCheckbox).prop('checked', false);

        //     }
        //     nmroCheckbox++;
        // }

        // let nCheckBox = index;
        // while (nCheckBox >= 0) {
        //     if (!$("#" + nCheckBox).is(':checked')) {
        //         $("#" + nCheckBox).prop('checked', true);
        //     }
        //     nCheckBox--;
        // }
    }

    itemRenderCuota(item, index) {
        let monto = 0;
        for (let c of item.concepto) {
            monto += parseFloat(c.Precio);
        }
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, paddingVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                        disabled={false}
                        value={true}
                        onValueChange={(value) => { this.selectCheck(value, (index + 1)) }}
                    />
                    {/* <TouchableOpacity onPress={() => this.selectCheck(index + 1)}>
                        <Image
                            source={icons.checked}
                            style={{
                                width: 22,
                                height: 22,
                                tintColor: COLORS.blue,
                                resizeMode: 'stretch',
                            }}
                        />
                    </TouchableOpacity> */}
                    <Text style={{ ...FONTS.body4, color: COLORS.secondary, marginLeft: 5 }}>{nombreMes(item.mes)} - {item.year}</Text>
                </View>
                <View>
                    <Text style={{ ...FONTS.body4, color: COLORS.secondary }}>{formatMoney(monto)}</Text>
                </View>
            </View>
        );
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
                            Pago de Cuotas
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 }}>
                    <TouchableOpacity
                        onPress={this.onEventAgregarCuota}
                        style={{ flexDirection: 'row', backgroundColor: COLORS.green, alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5 }}>
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
                        <Text style={{ ...FONTS.h4, color: COLORS.white }}>Agregar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: COLORS.primary, alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5 }}>
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
                        <Text style={{ ...FONTS.h4, color: COLORS.white }}>Eliminar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    {
                        this.state.isLoading ?
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                                <ActivityIndicator size="large" color={COLORS.primary} />
                                <Text style={{ ...FONTS.h3, color: COLORS.black, textAlign: 'center', marginBottom: 10 }}>{this.state.message}</Text>
                            </View>
                            :
                            this.state.cuotas.length > 0 ?
                                <View style={{ flex: 1, flexDirection: 'column' }}>

                                    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 0 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: COLORS.gray, borderBottomWidth: 1 }}>
                                            <View style={{ padding: 10 }}>
                                                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>Cuota del Mes</Text>
                                            </View>
                                            <View style={{ padding: 10 }}>
                                                <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>Monto</Text>
                                            </View>
                                        </View>
                                        <FlatList
                                            data={this.state.cuotas}
                                            renderItem={({ item, index }) => this.itemRenderCuota(item, index)}
                                            keyExtractor={(item, index) => index.toString()}
                                        />
                                    </View>

                                    <View style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: COLORS.green, justifyContent: 'center' }}>
                                        <View>
                                            <Text style={styles.textMessageData}>TOTAL DE {this.state.cuotas.length} CUOTAS: {formatMoney(this.state.totalCuotas)}</Text>
                                            <Text style={styles.textMessageData}>CUOTAS DEL: {this.state.cuotas[0].mes}/{this.state.cuotas[0].year} al {this.state.cuotas[this.state.cuotas.length - 1].mes}/{this.state.cuotas[this.state.cuotas.length - 1].year}</Text>
                                        </View>
                                    </View>
                                </View>

                                :
                                <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: COLORS.green, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        source={images.ayuda}
                                        style={{
                                            width: 80,
                                            height: 80,
                                            marginBottom: 10,
                                            resizeMode: 'stretch',
                                        }}
                                    />
                                    <Text style={styles.textMessageData}>Cuotas al Día has click en boton (+Agregar) para más cuotas.</Text>
                                </View>
                    }
                </View>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contenedorTitulo: {
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    textMessageData: {
        ...FONTS.h3, color: COLORS.white, textAlign: 'center'
    },
});


const mapStateToProps = (state) => {
    return {
        token: state.personaReducer
    }
}


export default connect(mapStateToProps)(PagoCuota);