import React from 'react';
import { StyleSheet, View,Text, StatusBar,ScrollView, Image} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { COLORS, SIZES, icons, FONTS, images } from '../constants';

class Contactenos extends React.Component{

  render(){
    return(
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        
          <ScrollView style={{ flex: 1, backgroundColor:COLORS.lightGray}} showsVerticalScrollIndicator={false}> 
            <View style={styles.container}>
              <View>
                <Image source={''}/>
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
});

export default Contactenos;


