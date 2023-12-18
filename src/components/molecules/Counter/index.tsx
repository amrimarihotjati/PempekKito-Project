import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const Counter = () => {
    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity>
                <Image
                    source={require('../../../assets/Icon/minus.png')}
                    style={styles.iconCounter}
                />
            </TouchableOpacity>

            <Text
                style={styles.counter}
            >16</Text>

            <TouchableOpacity>
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