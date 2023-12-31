import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Rating from '../Rating'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Number } from '../../molecules/index'

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
                            >IDR. {price}</Text>
                        </View>
                        <Rating ratingNumber={rating} />
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
                            {items} pempek
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
                            <View
                                style={styles.priceContainer}
                            >
                                <Text
                                    style={styles.price}
                                >{items} pempek</Text>
                                <Text> | </Text>
                                <Number
                                    style={styles.price}
                                    number={price}
                                    type="currency"
                                />

                            </View>
                        </View>
                    </>
                )
            case 'past-orders':

                const formatedDate = new Date(date).toLocaleDateString('id-ID', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

                return (
                    <>
                        <View style={styles.contentPastOrders}>
                            <View>
                                <Text
                                    style={styles.title}
                                >{name}</Text>
                                <View
                                    style={styles.priceContainer}
                                >
                                    <Text
                                        style={styles.price}
                                    >{items} pempek</Text>
                                    <Text> | </Text>
                                    <Number
                                        style={styles.price}
                                        number={price}
                                        type="currency"
                                    />
                                </View>
                            </View>
                            <View>
                                <Text
                                    style={styles.date}
                                >
                                    {formatedDate}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontFamily: 'Poppins-Bold',
                                        color: status === 'CANCELLED' ? 'red' : 'green',
                                    }}
                                >
                                    {status}
                                </Text>
                            </View>
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
                            <Number number={price} />
                        </View>
                        <Rating ratingNumber={rating} />
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
    priceContainer: {
        flexDirection: 'row',
        gap: 4,
    },
    price: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    content: {
        flex: 1,
    },
    contentPastOrders: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    items: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    date: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
    },
})