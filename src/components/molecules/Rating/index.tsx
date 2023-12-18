import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Rating = () => {
    return (
        <View style={styles.ratingContainer}>
            <View style={styles.startContainer}>
                <Image
                    source={require('../../../assets/Icon/star_on.png')}
                    style={{ width: 14, height: 14 }}
                />
                <Image
                    source={require('../../../assets/Icon/star_on.png')}
                    style={{ width: 14, height: 14 }}
                />
                <Image
                    source={require('../../../assets/Icon/star_on.png')}
                    style={{ width: 14, height: 14 }}
                />
                <Image
                    source={require('../../../assets/Icon/star_on.png')}
                    style={{ width: 14, height: 14 }}
                />
                <Image
                    source={require('../../../assets/Icon/star_off.png')}
                    style={{ width: 14, height: 14 }}
                />
            </View>
            <Text style={styles.rate}>4.5</Text>
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
    },
    startContainer: {
        flexDirection: 'row',
    },
    rate: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        marginLeft: 8
    }

})