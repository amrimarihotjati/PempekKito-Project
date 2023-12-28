import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Counter, Number, Rating } from '../../components'
import { getData } from '../../utils'

const FoodDetail = ({ navigation, route }: any) => {

    const { id, name, picturePatch, description, ingredients, rate, price } = route.params;
    const [totaItem, setTotalItem] = useState(1);
    const [userProfile, setUserProfile] = useState({});

    const onQuantityChange = (value: number) => {
        setTotalItem(value);
    }

    useEffect(() => {
        getData('userProfile').then((res) => {
            setUserProfile(res);
        })
    }, [])

    const onOrder = () => {
        const totalPrice = totaItem * price;
        const driver = 10000;
        const tax = 10 / 100 * totalPrice;
        const grandTotal = totalPrice + tax + driver;

        const data = {
            item: {
                id: id,
                name: name,
                picturePatch: picturePatch,
                price: price,
            },
            transaction: {
                totalItem: totaItem,
                totalPrice: totalPrice,
                driver: driver,
                tax: tax,
                grandTotal: grandTotal
            },
            userProfile
        };

        navigation.navigate('OrderSummary', data);
    }



    return (
        <View style={styles.page}>
            <ImageBackground
                source={{ uri: picturePatch }}
                style={styles.cover}
            >
                <View
                    style={styles.closeButton}
                >
                    <TouchableOpacity
                        style={styles.back}
                        onPress={() => navigation.goBack()}
                    >
                        <Text>X</Text>
                    </TouchableOpacity>
                    <Text
                        style={styles.textBack}
                    >Tutup</Text>
                </View>
            </ImageBackground>
            <ScrollView
                style={styles.containerContent}
            >
                <View>
                    <View
                        style={styles.mainContent}
                    >
                        <View style={styles.productContaier}>
                            <View>
                                <Text
                                    style={styles.title}
                                >{name}</Text>
                                <Rating ratingNumber={rate} />
                            </View>
                            <Counter onQuantityChange={onQuantityChange} />
                        </View>
                        <Text
                            style={styles.desc}
                        >{description}</Text>
                        <Text
                            style={styles.ingredients}
                        >Bahan</Text>
                        <Text
                            style={styles.desc}
                        >{ingredients}</Text>
                    </View>
                    <View
                        style={styles.priceContainer}
                    >
                        <View>
                            <Text>Total Harga</Text>
                            <Number
                                number={totaItem * price} type='' style={styles.totalPrice} />
                        </View>
                        <View>
                            <Button
                                title="Pesan Sekarang"
                                OnPress={onOrder}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    cover: {
        height: 330,
        paddingTop: 26,
        paddingLeft: 22,
    },
    closeButton: {
        width: 50,
        height: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        opacity: 0.7,

    },
    textBack: {
        fontSize: 10,
        fontFamily: 'Poppins-Medium',
        color: 'white',

    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins-Medium',
        color: 'black',
    },
    productContaier: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
    },
    desc: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: 'grey',
        marginBottom: 4,
        textAlign: 'justify',
    },
    ingredients: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: 'black',
        marginBottom: 1,
    },
    mainContent: {
        flex: 1,
        marginBottom: 20,
    },
    containerContent: {
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -40,
        paddingTop: 26,
        paddingHorizontal: 16,
        flex: 1,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    totalPrice: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: 'black',
    }
})