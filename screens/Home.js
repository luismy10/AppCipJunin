import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, StatusBar, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { COLORS, SIZES, icons, FONTS, images } from '../constants';

const Home = ({navigation}) => {

    const [newPlants, setNewPlants] = React.useState([
        {
            id: 0,
            name: 'Plant 1',
            img: images.plant1,
            favourite: false
        },
        {
            id: 1,
            name: 'Plant 2',
            img: images.plant2,
            favourite: true
        },
        {
            id: 2,
            name: 'Plant 3',
            img: images.plant3,
            favourite: false
        },
        {
            id: 3,
            name: 'Plant 4',
            img: images.plant4,
            favourite: false
        },
    ]);

    const [friendList, setFriendList] = React.useState([
        {
            id: 0,
            img: images.profile1
        },
        {
            id: 1,
            img: images.profile2
        },
        {
            id: 2,
            img: images.profile3
        },
        {
            id: 3,
            img: images.profile4
        },
        {
            id: 4,
            img: images.profile5
        },
    ]);

    function renderNewPlants(item, index) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: SIZES.base }}>
                <Image
                    source={item.img}
                    resizeMode='cover'
                    style={{
                        width: SIZES.width * 0.23,
                        height: "75%",
                        borderRadius: 15
                    }}
                />

                <View style={{
                    position: 'absolute',
                    bottom: '17%',
                    right: 0,
                    backgroundColor: COLORS.primary,
                    paddingHorizontal: SIZES.base,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10
                }}>
                    <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
                </View>

                <TouchableOpacity style={{
                    position: 'absolute',
                    top: '15%',
                    left: 17
                }}
                    onPress={() => { console.warn("favorite") }}>
                    <Image
                        source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    function renderFriendsComponent() {
        if (friendList.length == 0) {
            return (<View></View>);
        } else if (friendList.length <= 3) {
            return (
                friendList.map((item, index) => (
                    <View
                        key={("friend-" + index)}
                        style={index == 0 ? {} : { marginLeft: -20 }}>
                        <Image
                            source={item.img}
                            resizeMode='cover'
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                borderWidth: 3,
                                borderColor: COLORS.primary
                            }} />
                    </View>
                ))
            );
        } else {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {friendList.map((item, index) => {
                        if (index <= 2) {
                            return (
                                <View
                                    key={("friend-" + index)}
                                    style={index == 0 ? {} : { marginLeft: -20 }}>
                                    <Image
                                        source={item.img}
                                        resizeMode="cover"
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25,
                                            borderWidth: 3,
                                            borderColor: COLORS.primary
                                        }}
                                    />
                                </View>
                            );
                        }
                    })}
                    <Text style={{marginLeft:5,color:COLORS.secondary,...FONTS.body3}}>+{friendList.length - 3} More</Text>
                </View> 
            );
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary}/>
            <ScrollView style={{ flex:1,backgroundColor: COLORS.lightGray}} 
                showsVerticalScrollIndicator={false}>  
                <View style={styles.container}>
                    {/* New Plant */}
                    <View style={{ height: SIZES.height * 0.35, backgroundColor: COLORS.white }}>
                        <View style={{
                            flex: 1,
                            borderBottomLeftRadius: 30,
                            borderBottomRightRadius: 30, 
                            backgroundColor: COLORS.primary
                        }}>
                            <View style={{
                                marginHorizontal: SIZES.padding
                            }}>
                                <View style={{
                                    marginTop:20,flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                                }}>
                                    <Text style={{ color: COLORS.white, ...FONTS.h2 }}>New Plant</Text>
                                    <TouchableOpacity
                                        onPress={() => { console.warn("Dd") }}>
                                        <Image
                                            source={icons.focus}
                                            resizeMode='contain'
                                            style={{
                                                width: 20,
                                                height: 20
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: SIZES.base }}>
                                    <FlatList
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        data={newPlants}
                                        keyExtractor={item => item.id.toString()}
                                        renderItem={({ item, index }) => renderNewPlants(item, index)}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* Today's Share */} 
                    <View style={{ height: SIZES.height * 0.50, backgroundColor: COLORS.lightGray }}>
                        <View style={{
                            flex: 1, 
                            borderBottomLeftRadius: 30,
                            borderBottomRightRadius: 30, 
                            backgroundColor: COLORS.white,
                            paddingBottom: 40,  
                        }}> 

                            <View style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>Today's Share</Text>
                                    <TouchableOpacity
                                        style={{}}
                                        onPress={() => { }}>
                                        <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>See All</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'row', height: '88%', marginTop: SIZES.base }}>
                                    <View style={{ flex: 1 }}>
                                        <TouchableOpacity style={{ flex: 1 }}
                                            onPress={() => {navigation.navigate("PlantDetail") }}>
                                            <Image
                                                source={images.plant5}
                                                resizeMode='cover'
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: 20
                                                }} />
                                        </TouchableOpacity>

                                        <TouchableOpacity style={{ flex: 1, marginTop: SIZES.font }}
                                            onPress={() => { navigation.navigate("PlantDetail")}}>
                                            <Image
                                                source={images.plant6}
                                                resizeMode='cover'
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: 20
                                                }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 1.3 }}>
                                        <TouchableOpacity
                                            style={{ flex: 1, marginLeft: SIZES.font }}
                                            onPress={() => {navigation.navigate("PlantDetail") }}>
                                            <Image
                                                source={images.plant7}
                                                resizeMode='cover'
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: 20
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                    {/* Added Friend */}
                    <View style={{ height: SIZES.height * 0.35, backgroundColor: COLORS.lightGray }}>
                        <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
                            <View style={{ marginTop: SIZES.largeTitle, marginHorizontal: SIZES.padding }}>
                                <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>Added Friend</Text>
                                <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>{friendList.length} Total</Text>
                                <View style={{ flexDirection: 'row',marginTop:SIZES.radius }}>
                                    {/* Friends */}
                                    <View style={{ flex: 1.3, flexDirection: 'row', alignItems: 'center' }}>
                                        {renderFriendsComponent()}
                                    </View> 

                                    {/* Add Friend */} 
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                        <Text style={{color:COLORS.secondary,...FONTS.body3}}>Add New</Text>
                                        <TouchableOpacity
                                        style={{
                                            marginLeft:SIZES.base,
                                            width:40,
                                            height:40,
                                            borderRadius:10,
                                            alignItems:'center',
                                            justifyContent:'center', 
                                            backgroundColor:COLORS.gray
                                        }}
                                        onPress={()=>{}}>
                                            <Image 
                                            source={icons.plus}
                                            resizeMode="contain"
                                            style={{
                                                width:20,
                                                height:20
                                            }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1       
    }
});

export default Home;


