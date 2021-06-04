import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { images, COLORS, FONTS, SIZES, icons} from '../constants';
export default class Login extends React.Component {

  constructor(props) {
    super(props);
    
  }

componentDidMount(){    
    this.props.navigation.setOptions({
      title: 'Solicitar Credenciales',
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTintColor: COLORS.white,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()} style={{flexDirection:'row'}}>
                  <Image source={icons.back} style={{width:20, height:15, tintColor:COLORS.white}}/>
                  <Text style={{color:COLORS.white}}>Regresar</Text>
                </TouchableOpacity>
              ),
    }); 
  }

  render() {
    return (    
      <View style={css.container}>
        <ImageBackground source={images.fondoLogin} style={css.image}>
          <View style={{alignItems:'center', paddingTop:'5%', paddingBottom:15}}>
            <Image source={images.logoCIPColor} style={{width:120, height:120}} />
          </View> 
          <View>
            <Text style={{...FONTS.text_tittle}}>COLEGIO DE INGENIEROS DEL PERÚ</Text>
          </View>
          <View style={{paddingHorizontal:20, paddingTop:100}}>
            <TextInput style={css.input} placeholder="Ingrese Número CIP o Dni" fkeyboardType="numeric"/>
          </View>
          <View style={css.buttonAceptar}>
            <TouchableOpacity style={{borderBottomLeftRadius:10,borderTopRightRadius:10,backgroundColor:'#EB2F2F',paddingVertical:8,paddingHorizontal:30}}
            onPress={()=>this.props.navigation.navigate('')}>
              <Text style={{...FONTS.h4,color:COLORS.white}}>ENVIAR</Text>
            </TouchableOpacity>
          </View >
          <View style={{position: 'absolute', left: 0, right: 0, bottom: 30, flexDirection:'row'}}>
            <View style={{width:'100%',alignItems:'center'}}>             
              <View style={{display:'flex',flexDirection:'row',alignItems:'center',}}>
                <Text style={{fontWeight:'bold', textAlign:'center'}}>Las credenciales seran enviadas a su correo institucional</Text>
              </View>
            </View>             
          </View>
        </ImageBackground>
      </View>    
    );
  }
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',    
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#C1BFBF',
    paddingLeft:10,
  },
    buttonAceptar:{
    paddingTop:15, 
    width:'', 
    alignItems: 'center', 
    justifyContent:'center',
  }
});
