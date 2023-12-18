import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Rating } from '..'

const FoodCard = ({ image }: any) => {
    return (
        <View style={styles.container}>
            <Image
                source={image}
                style={styles.image}
            />
            <View style={styles.content}>
                <Text
                    style={styles.text}
                >Pempek</Text>
                <Rating />
            </View>
        </View>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    container: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        overflow: 'hidden',
        marginRight: 16
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
    },

    content: {
        padding: 12,
    },
    image: {
        width: '100%',
        height: 160,
        resizeMode: 'cover'
    },
    rate: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        marginLeft: 8
    }

})