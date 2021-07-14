import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, Image, SafeAreaView, TouchableOpacity,BackHandler ,Platform } from 'react-native';
import { COLORS, SIZES, icons, FONTS, URL } from '../constants';
import { getDateFormaMMYY } from "./tools/Tools";
import { connect } from 'react-redux';

class RespuestaPago extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: JSON.parse(this.props.token.userToken),
        }
        this.props.navigation.setOptions({
            title: 'Resumen de la Transacción',
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
            headerLeft: null
        });
    }

    componentDidMount() {
        if(Platform.OS !== 'ios'){
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        }      
    }

    handleBackButton = () => {
        this.props.navigation.popToTop();
        return true;
    }

    onEventVolver = () => {
        this.props.navigation.navigate('Servicios');
    }

    render() { 
        let {estado,message,monto} = this.props.route.params;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
                <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

                <ScrollView>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                        <View style={{ borderColor: COLORS.gray, borderWidth: 1, backgroundColor: COLORS.white, padding: 10,marginBottom:10,flexDirection:'row',alignItems: 'center'}}>
                            <Image
                            source={estado == 1 ? icons.ok : icons.error}
                            resizeMode='contain'
                            style={{ width: 36, height: 36, marginRight: 10 }} />
                            <Text style={{ ...FONTS.h3, color: COLORS.secondary }}>{message}</Text>
                        </View>
                        
                        <View style={{ borderColor: COLORS.gray, borderWidth: 1, backgroundColor: COLORS.white, padding: 10 }}>
                            <Text style={{ ...FONTS.h4, color: COLORS.grayDark }}>MONTO</Text>
                            <Text style={{ ...FONTS.h2, color: COLORS.green }}>S/ {monto}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 5 }}>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    backgroundColor: COLORS.primary,
                                    alignItems: 'center', 
                                    paddingHorizontal: 13, 
                                    paddingVertical: 8
                                }}
                                onPress={this.onEventVolver}>
                                <Image
                                    source={icons.back}
                                    style={{
                                        width: 16,
                                        height: 16,
                                        margin: 5,
                                        tintColor: COLORS.white,
                                        resizeMode: 'stretch',
                                    }}
                                />
                                <Text style={{ ...FONTS.h4, color: COLORS.white }}>Volver</Text>
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

export default connect(mapStateToProps)(RespuestaPago);


