import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView,Image,ImageBackground } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { COLORS, SIZES, icons, FONTS, images } from '../constants';

class Perfil extends React.Component {
  render() {
    return (
      
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        
          <ScrollView style={{ flex: 1, backgroundColor:COLORS.lightGray}} showsVerticalScrollIndicator={false}> 
            <View style={styles.container}>
              <View style={{alignItems:'center', paddingBottom:20}}>
                <View style={styles.image_avatar}>
                  <Image source={images.avatar} style={{width:200, height:200,}}/>
                </View>
              </View>
              <View style={{paddingHorizontal:20}}>
                <View style={styles.box_text}>
                  <Text style={styles.text}>DNI : </Text>
                  <Text style={styles.text_data}>19881832</Text>
                </View>
                <View style={styles.box_text}>
                  <Text style={styles.text}>Nombres : </Text>
                  <Text style={styles.text_data}>TITO FERNANDO</Text>
                </View>
                <View style={styles.box_text}>
                  <Text style={styles.text}>Apellidos : </Text>
                  <Text style={styles.text_data}>ABARCA PRADO</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <View style={{width:'50%', paddingRight:5}}>
                    <View style={styles.box_text} >
                      <Text style={styles.text}>Genero : </Text>
                      <Text style={styles.text_data}>Masculino</Text>
                    </View>
                  </View>
                  <View style={{width:'50%', paddingLeft:5}}>
                    <View style={styles.box_text}>
                      <Text style={styles.text}>Nacimiento : </Text>
                      <Text style={styles.text_data}>09/07/1962</Text>
                    </View>
                  </View>                
                </View>
                <View style={{flexDirection:'row'}}>
                  <View style={{width:'50%', paddingRight:5}}>
                    <View style={styles.box_text}>
                      <Text style={styles.text}>Estado Civil : </Text>
                      <Text style={styles.text_data}>Casado/a</Text>
                    </View>
                  </View>
                  <View style={{width:'50%', paddingLeft:5}}>
                    <View style={styles.box_text}>
                      <Text style={styles.text}>Teléfono / Celular : </Text>
                      <Text style={styles.text_data}> - </Text>
                    </View>
                  </View>                
                </View>
                <View style={styles.box_text}>
                  <Text style={styles.text}>Dirección : </Text>
                  <Text style={styles.text_data}> - </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <View style={{width:'50%', paddingRight:5}}>
                    <View style={styles.box_text} >
                      <Text style={styles.text}>Código CIP : </Text>
                      <Text style={styles.text_data}>67383</Text>
                    </View>
                  </View>
                  <View style={{width:'50%', paddingLeft:5}}>
                    <View style={styles.box_text}>
                      <Text style={styles.text}>Condición : </Text>
                      <Text style={styles.text_data}>Ordinario</Text>
                    </View>
                  </View>                
                </View>
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
    top: 20,
  },
  image_avatar: {
    backgroundColor: COLORS.lightGray,
    padding:5,
    borderWidth:1,
    borderColor:'#C0CAD0',
    borderRadius:5,
    shadowColor: '#000',
    shadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.51,
    shadowRadius: 10,
    elevation: 1,
  },
  box_text:{
    backgroundColor: COLORS.white,
    height: 50,
    padding: 10,
    marginBottom:10,
    justifyContent:'center',
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.51,
    shadowRadius: 10,
    elevation: 1,
  },
  text:{
    fontFamily:'Arial Black',
    fontWeight:"bold",
    paddingBottom:5
  },
  text_data:{

  },
  image: {
    flex: 1,
    resizeMode: 'cover',    
  },
});

export default Perfil;
