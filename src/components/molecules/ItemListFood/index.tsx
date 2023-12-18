import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Rating from '../Rating'
import { TouchableOpacity } from 'react-native-gesture-handler'

// TYPE
// 1. Product
// 2. Order-summary
// 3. in progress
// 4. past orders


const ItemListFood = ({
    image,
    onPress,
    rating,
    items,
    price,
    type,
    name,
    date,
    status
}: any) => {

    const renderContent = () => {
        switch (type) {
            case 'product':
                return (
                    <>
                        <View style={styles.content}>
                            <Text
                                style={styles.title}
                            >{name}</Text>
                            <Text
                                style={styles.price}
                            >Rp. {price}</Text>
                        </View>
                        <Rating rating={rating} />
                    </>
                )

            case 'order-summary':
                return (
                    <>
                        <View style={styles.content}>
                            <Text
                                style={styles.title}
                            >{name}</Text>
                            <Text
                                style={styles.price}
                            >Rp. {price}</Text>
                        </View>
                        <Text
                            style={styles.items}
                        >
                            {items} items
                        </Text>
                    </>
                )

            case 'in-progress':
                return (
                    <>
                        <View style={styles.content}>
                            <Text
                                style={styles.title}
                            >{name}</Text>
                            <Text
                                style={styles.price}
                            >{items} items | Rp. {price}</Text>
                        </View>
                    </>
                )
            case 'past-orders':
                return (
                    <>
                        <View style={styles.content}>
                            <Text
                                style={styles.title}
                            >{name}</Text>
                            <Text
                                style={styles.price}
                            >{items} items | Rp. {price}</Text>
                        </View>
                        <View>
                            <Text
                                style={styles.date}
                            >{date}</Text>
                            <Text
                                style={styles.status}
                            >{status}</Text>
                        </View>
                    </>
                )
            default:
                return (
                    <>
                        <View style={styles.content}>
                            <Text
                                style={styles.title}
                            >{name}</Text>
                            <Text
                                style={styles.price}
                            >Rp. {price}</Text>
                        </View>
                        <Rating />
                    </>
                )
        }
    }


    //Konten Utama
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
        >
            <View style={styles.container}>
                <Image
                    source={image}
                    style={styles.image}
                />
                {renderContent()}
            </View>
        </TouchableOpacity>
    )
}

export default ItemListFood

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 8,
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 12
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
    price: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    content: {
        flex: 1
    },
    items: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    date: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    status: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: 'red'
    }
})