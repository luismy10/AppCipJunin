import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, icons, FONTS, images } from '../../constants';
import { Header } from 'react-native-elements';


export default class HeaderTab extends React.Component {

    render() {
        return (
            <Header
                statusBarProps={{ barStyle: "light-content", backgroundColor: COLORS.primary }}
                leftComponent={
                    <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={icons.cip} resizeMode='contain' style={{ width: 24, height: 24 }} />
                        </View>
                    </View>
                }
                centerComponent={
                    <View style={{ alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5 }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white, fontWeight: 'bold', textAlignVertical: 'center' }}>CIP CD JUNIN</Text>
                    </View>
                }
                rightComponent={
                    <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                        <TouchableOpacity
                            onPress={() => this.props.onEventCloseSession()} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={icons.turnoff} resizeMode='contain' style={{ width: 24, height: 24, tintColor: COLORS.white }} />
                        </TouchableOpacity>
                    </View>
                }
                containerStyle={{
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    justifyContent: 'space-around',

                }} />

        );
    }

}