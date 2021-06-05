import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { COLORS, SIZES, icons, FONTS, images } from '../constants';

const eventos = [
  {
    id: "0",
    name: 'Evento 1',
    img: images.evento1,
    favourite: false
  },
  {
    id: "1",
    name: 'Evento 2',
    img: images.evento2,
    favourite: true
  },
  {
    id: "2",
    name: 'Evento 3',
    img: images.evento3,
    favourite: false
  },
  {
    id: "3",
    name: 'Evento 4',
    img: images.evento4,
    favourite: false
  },
  {
    id: "4",
    name: 'Evento 5',
    img: images.evento5,
    favourite: false
  },
  {
    id: "5",
    name: 'Evento 6',
    img: images.evento6,
    favourite: false
  },
  {
    id: "6",
    name: 'Evento 7',
    img: images.evento7,
    favourite: false
  }
]

class Home extends React.Component {

  _renderItem(item) {
    return (
      <Image style={{ width: 80, height: 120 }} source={item.img} />
    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        <ScrollView style={{ backgroundColor: COLORS.white }} showsVerticalScrollIndicator={false}>

          <View style={styles.container}>

            <View style={{ paddingHorizontal: 20 }}>
              <Text style={{ ...FONTS.text_Name }}>N° CIP : 67383</Text>
              <Text style={{ ...FONTS.text_Name }}>Ing. Abarca Prado Tito Fernandez</Text>
              <Text style={{ ...FONTS.h4, color: '#959595', }}>Minas - Ingeniería de minas</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 5 }}>
              <View style={styles.blocks}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                  <View style={{ padding: 10 }}>
                    <Image source={images.sheck} style={{ width: 20, height: 20 }} />
                  </View>
                  <View style={{}}>
                    <Text style={{ ...FONTS.italicBold }}> Su Estado:</Text>
                    <Text style={{ ...FONTS.italic, color: '#B6B6B6', }}> Habilitado</Text>
                  </View>
                </View>
              </View>

              <View style={styles.blocks}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                  <View style={{ padding: 10 }}>
                    <Image source={images.money} style={{ width: 20, height: 20 }} />
                  </View>
                  <View style={{}}>
                    <Text style={{ ...FONTS.italicBold }}> Su Deuda:</Text>
                    <Text style={{ ...FONTS.italic, color: '#B6B6B6', }}> S/ 123.45</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <Text style={{ ...FONTS.h4, }}>Su Condición : Ordinario</Text>
              <Text style={{ ...FONTS.h4, color: '#959595', }}>17 años para ser Vitalicio</Text>
              {/* <ProgressViewIOS style={styles.progress} progressTintColor="blue" progress={0.7} /> */}
            </View>
            {/* Eventos */}
            <View style={{ height: SIZES.height * 0.30, backgroundColor: COLORS.white }}>
              <View style={{ flex: 1, backgroundColor: '#BABABA' }}>
                <View style={{ marginHorizontal: SIZES.padding }}>
                  <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Eventos</Text>
                    <TouchableOpacity onPress={() => { console.warn("Dd") }}>
                      <Image source={icons.focus} resizeMode='contain' style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginTop: SIZES.base }}>
                    <FlatList
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                      renderItem={({ item }) => this._renderItem(item)} data={eventos}
                      keyExtractor={(item) => item.id} />
                  </View>
                </View>
              </View>
            </View>
            {/*End Eventos */}
            {/* Revistas*/}
            <View style={{ height: SIZES.height * 0.50, backgroundColor: COLORS.lightGray }}>
              <View style={{ flex: 1, backgroundColor: COLORS.white, paddingBottom: 40, }}>
                <View style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>Revistas</Text>
                    <TouchableOpacity style={{}} onPress={() => { }}>
                      <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>Ver Todo</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', height: '88%', marginTop: SIZES.base }}>
                    <View style={{ flex: 1 }}>
                      <TouchableOpacity style={{ flex: 1 }}>
                        <Image source={images.revista1} resizeMode='cover' style={{ width: "100%", height: "100%", borderRadius: 10 }} />
                      </TouchableOpacity>

                      <TouchableOpacity style={{ flex: 1, marginTop: SIZES.font }}>
                        <Image source={images.revista2} resizeMode='cover' style={{ width: "100%", height: "100%", borderRadius: 10 }} />
                      </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1.3 }}>
                      <TouchableOpacity style={{ flex: 1, marginLeft: SIZES.font }}>
                        <Image source={images.revista3} resizeMode='cover' style={{ width: '100%', height: '100%', borderRadius: 10 }} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/*End Revistas */}
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
    paddingVertical: 20
  },
  blocks: {
    backgroundColor: COLORS.lightGray,
    flexDirection: 'row',
    width: SIZES.width * 0.35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 3, },
    shadowOpacity: 0.51,
    shadowRadius: 10,
    paddingVertical: 10,
    elevation: 1
  },
});

export default Home;


