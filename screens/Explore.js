import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './component/Explore/Category';
import StarRating from 'react-native-star-rating';

const { width, height } = Dimensions.get('window');
class Explore extends Component {
    componentWillMount() {

        this.scrollY = new Animated.Value(0);

        this.startHeaderHeight = 100;
        this.endHeaderHeight = 50;
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 80 + StatusBar.currentHeight;
            this.endHeaderHeight = 40 + StatusBar.currentHeight;
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange:[0,50],
            outputRange:[this.startHeaderHeight,this.endHeaderHeight],
            extrapolate:'clamp'
        })

        this.animetedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange:[0,1],
            extrapolate:'clamp'
        })

        this.animetedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange:[-30,10],
            extrapolate:'clamp'
        })


    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd', marginTop: 30, }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            justifyContent: 'center',
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 3,
                            // marginTop: Platform.OS == 'android' ? 20 : null
                        }}>
                            <Icon name='ios-search' size={20} style={{ marginRight: 10, marginTop: 3 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Try New Delhi"
                                placeholderTextColor="grey"
                                style={{
                                    flex: 1, fontWeight: '700',
                                    backgroundColor: 'white',
                                }}
                            />
                        </View>
                        <Animated.View
                            style={{
                                flexDirection: 'row', marginHorizontal: 20,
                                position: 'relative', top: this.animetedTagTop,
                                opacity:this.animetedOpacity
                            }}
                        >
                            <View style={{
                                minHeight: 20, minWidth: 40, padding: 5,
                                backgroundColor: 'white',
                                borderColor: '#dddddd', borderWidth: 0.2,
                                borderRadius: 2,
                                marginRight:5
                            }}>
                                <Text style={{ fontSize: 12, fontWeight: '700' }}>Guest</Text>
                            </View>
                            <View style={{
                                minHeight: 20, minWidth: 40, padding: 5,
                                backgroundColor: 'white',
                                borderColor: '#dddddd', borderWidth: 0.2,
                                borderRadius: 2
                            }}>
                                <Text style={{ fontSize: 12, fontWeight: '700' }}>Guest</Text>
                            </View>
                        </Animated.View>
                    </Animated.View>

                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                {nativeEvent:{contentOffset:{y:this.scrollY}}}
                            ]
                        )}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{
                                fontSize: 24, fontWeight: '700',
                                paddingHorizontal: 20,
                            }}>
                                What can we help you find, Varus?
                                </Text>
                        </View>
                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <Category
                                    imageUri={require('../assets/food.jpg')}
                                    name="home"
                                />
                                <Category
                                    imageUri={require('../assets/food.jpg')}
                                    name="home"
                                />
                                <Category
                                    imageUri={require('../assets/food.jpg')}
                                    name="home"
                                />
                                <Category
                                    imageUri={require('../assets/food.jpg')}
                                    name="home"
                                />
                            </ScrollView>
                        </View>
                        <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                Introducing Airbnb Plus
                            </Text>
                            <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                A new selection of homes verified for
                                quality & comfort
                            </Text>
                            <View style={{ width: width - 40, paddingTop: 10 }}>
                                <Image source={require('../assets/food.jpg')}
                                    style={{
                                        flex: 1, width: width - 40, height: 180,
                                        resizeMode: 'cover', paddingTop: 10,
                                        borderRadius: 5, borderWidth: 1,
                                        borderColor: '#dddddd'
                                    }} />
                            </View>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <Text style={{
                                fontSize: 24, fontWeight: '700',
                                paddingHorizontal: 20
                            }}>
                                Home around the world
                            </Text>
                            <View style={{ marginHorizontal: 20, paddingTop: 20 }}>
                                <View style={{ flex: 1, width: width / 2, height: width / 2 }}>
                                    <View style={{ flex: 1 }}>
                                        <Image
                                            source={require('../assets/food.jpg')}
                                            style={{ flex: 1, width: width / 2 - 10, height: width / 2 - 10, resizeMode: 'cover' }}
                                        />

                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-start', paddingLeft: 10, justifyContent: 'space-evenly' }}>
                                        <Text style={{ fontSize: 12, color: '#b63838' }}>PRIVATE ROOM - 2 BEDS</Text>
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>The Cozy Palace</Text>
                                        <Text style={{ fontSize: 10 }}>82$</Text>
                                        <StarRating
                                            disabled={true}
                                            maxStars={5}
                                            rating={4}
                                            starSize={10}
                                        />


                                    </View>
                                </View>
                            </View>

                        </View>

                    </ScrollView>
                </View>

            </SafeAreaView>
        )
    }
}

export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
