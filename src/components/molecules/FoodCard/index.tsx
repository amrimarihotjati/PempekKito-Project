import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Rating } from '..'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FoodCard = ({ name, image, rating, onPress }: any) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
        >
            <View style={styles.container}>
                <Image
                    source={{ uri: image }}
                    resizeMode="cover"
                    style={styles.image}
                />
                <View style={styles.content}>
                    <Text
                        style={styles.text}
                    >{name}</Text>
                    <Rating ratingNumber={rating} />
                </View>
            </View>
        </TouchableOpacity>
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