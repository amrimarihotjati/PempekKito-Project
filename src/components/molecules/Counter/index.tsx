import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { useState, useEffect } from 'react'

const Counter = ({ onQuantityChange }) => {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        onQuantityChange(quantity);
    })

    const onCount = (type: string) => {
        let result = quantity;

        if (type === 'plus') {

            result = quantity + 1

        } else if (type === 'minus') {
            if (quantity > 1) {
                result = quantity - 1
            }
        }

        setQuantity(result);
        onQuantityChange(result);
    }

    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity onPress={() => onCount('minus')}>
                <Image
                    source={require('../../../assets/Icon/minus.png')}
                    style={styles.iconCounter}
                />
            </TouchableOpacity>

            <Text
                style={styles.counter}
            >{quantity}</Text>

            <TouchableOpacity onPress={() => onCount('plus')}>
                <Image
                    source={require('../../../assets/Icon/plus.png')}
                    style={styles.iconCounter}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    counter: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    iconCounter: {
        width: 20,
        height: 20
    }
})