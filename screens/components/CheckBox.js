import React from 'react';
import { View, Text } from 'react-native';
import { COLORS, SIZES, icons, FONTS, images } from '../../constants';
import { formatMoney, nombreMes } from "../tools/Tools";
import CheckBox from '@react-native-community/checkbox';

export default class ChechBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: true
        }
    }

    render() {
        const { item, monto, selectCheck } = this.props;
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, paddingVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                        disabled={false}
                        value={this.state.value}
                        onValueChange={(value) => { selectCheck(item); this.setState({ value: value }); }}
                    />
                    <Text style={{ ...FONTS.body4, color: COLORS.secondary, marginLeft: 5 }}>{nombreMes(item.mes)} - {item.year}</Text>
                </View>
                <View>
                    <Text style={{ ...FONTS.body4, color: COLORS.secondary }}>{formatMoney(monto)}</Text>
                </View>
            </View>
        );
    }

}

