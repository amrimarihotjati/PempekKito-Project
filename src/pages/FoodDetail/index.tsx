import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Counter, Rating } from '../../components'

const FoodDetail = ({ navigation }: any) => {
    return (
        <View style={styles.page}>
            <ImageBackground
                source={require('../../assets/Dummy/pempek_1.jpeg')}
                style={styles.cover}
            >
                <TouchableOpacity
                    style={styles.back}
                >
                    <Text>X</Text>
                </TouchableOpacity>
                <Text
                    style={styles.textBack}
                >Back</Text>
            </ImageBackground>
            <View
                style={styles.containerContent}
            >
                <View
                    style={styles.mainContent}
                >
                    <View style={styles.productContaier}>
                        <View>
                            <Text
                                style={styles.title}
                            >Pempek</Text>
                            <Rating />
                        </View>
                        <Counter />
                    </View>
                    <Text
                        style={styles.desc}
                    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate consectetur, similique deleniti pariatur, porro id facere laudantium aliquam eligendi autem, ipsam rem earum dolor recusandae eveniet fugit aut dolore magnam.</Text>
                    <Text
                        style={styles.ingredients}
                    >Ingredients</Text>
                    <Text
                        style={styles.desc}
                    >Ikan tenggiri, sagu, garam</Text>
                </View>
                <View
                    style={styles.priceContainer}
                >
                    <View>
                        <Text>Total Price</Text>
                        <Text
                            style={styles.totalPrice}
                        >Rp. 20.000</Text>
                    </View>
                    <View>
                        <Button
                            title="Order Now"
                            OnPress={() => navigation.navigate('OrderSummary')}
                        />
                    </View>
                </View>
            </View>
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
    back: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textBack: {
        fontSize: 14,
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
        marginBottom: 4
    },
    ingredients: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: 'black',
        marginBottom: 1,
    },
    mainContent: {
        flex: 1,
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