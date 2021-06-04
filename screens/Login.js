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
import { images, COLORS, FONTS, SIZES } from '../constants';
export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisiblePassword:false
    }
  }

  _isVisiblePassword =()=>{    
    this.setState({isVisiblePassword:!this.state.isVisiblePassword})
  }

  render() {
    return (    
      <View style={css.container}>
        <ImageBackground source={images.fondoLogin} style={css.image}>
          <View style={{alignItems:'center', paddingTop:'25%', paddingBottom:15}}>
            <Image source={images.logoCIPColor} style={{width:120, height:120}} />
          </View> 
          <View>
            <Text style={{...FONTS.text_tittle}}>COLEGIO DE INGENIEROS DEL PERÚ</Text>
          </View>
          <View style={{paddingHorizontal:20, paddingTop:100}}>
            <TextInput style={css.input} placeholder="Ingrese Número CIP o Dni" fkeyboardType="numeric"/>
          </View>
          <View style={{paddingHorizontal:20, paddingTop:15}}>
            <TextInput style={css.input} placeholder="Ingrese Su Contraseña" secureTextEntry={!this.state.isVisiblePassword}/>
            <TouchableOpacity style={{ position:'absolute', right:45, top:40}} onPress={()=>this._isVisiblePassword()}>
              <Image source={this.state.isVisiblePassword? images.eyesUnlock:images.eyesLock} style={{width:20, height:20,}}/>
            </TouchableOpacity>
          </View>
          <View style={css.buttonAceptar}>
            <TouchableOpacity style={{borderBottomLeftRadius:10,borderTopRightRadius:10,backgroundColor:'#EB2F2F',paddingVertical:8,paddingHorizontal:30}}>
              <Text style={{...FONTS.h4,color:COLORS.white}}>INGRESAR</Text>
            </TouchableOpacity>
          </View >
          <View style={{alignItems:'center', paddingTop:20, }}>
            <Text style={{textDecorationLine: 'underline'}}>¿Olvido su contraseña?</Text>
          </View>

          <View style={{position: 'absolute', left: 0, right: 0, bottom: 30, flexDirection:'row'}}>

            <View style={{width:'50%',alignItems:'center'}}>             
              <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Image source={images.phoneIcon} style={{width:12, height:12,marginHorizontal:10,resizeMode:'stretch'}}/>
                <Text style={{fontWeight:'bold'}}>Contactenos</Text>
              </View>
            </View>

            <View style={{width:'50%', alignItems:'center'}}>              
              <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Image source={images.placeIcon} style={{width:12, height:12,marginHorizontal:10,resizeMode:'stretch'}}/>
                <Text style={{fontWeight:'bold'}}>Ubicanos</Text>
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
