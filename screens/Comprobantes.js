import React from 'react';
import { StyleSheet, View,Text, StatusBar,ScrollView, Image, Linking,SafeAreaView, TouchableOpacity} from 'react-native';
import { COLORS, SIZES, icons, FONTS, images } from '../constants';

class Comprobantes extends React.Component{

  render(){
    return(
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
          <ScrollView style={{ flex: 1, backgroundColor:COLORS.lightGray}} showsVerticalScrollIndicator={false}>      
            <View style={styles.container}>
              <View style={styles.box}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Ingresos')}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={icons.search} style={{width:20,height:20,resizeMode:'stretch',marginRight:10}} />
                    <Text style={{...FONTS.h2,color:COLORS.black}}>Est. Cuentas</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('')}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={icons.search} style={{width:20,height:20,resizeMode:'stretch',marginRight:10}} />
                    <Text style={{...FONTS.h2,color:COLORS.black}}>Cert. Habilidad</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('')}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={icons.search} style={{width:20,height:20,resizeMode:'stretch',marginRight:10}} />
                    <Text style={{...FONTS.h2,color:COLORS.black}}>Cert. Obra</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('')}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={icons.search} style={{width:20,height:20,resizeMode:'stretch',marginRight:10}} />
                    <Text style={{...FONTS.h2,color:COLORS.black}}>Cert. Proyecto</Text>
                  </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.height
  },
  box: {
    minWidth:'70%',
    backgroundColor: COLORS.white,   
    paddingHorizontal:30,
    paddingVertical:10,
    justifyContent: 'center',
    alignItems:'center',
    borderColor: COLORS.white,
    borderWidth:1,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 5,},
    shadowOpacity: 0.71,
    shadowRadius: 10,
    elevation:5,
    marginBottom:20,
  },
});

export default Comprobantes;

