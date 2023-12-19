import { StyleSheet, Text, View, Image } from 'react-native'
import Number from '../Number'
import React from 'react'

const Rating = ({ ratingNumber }: { ratingNumber: number }) => {

    const renderStar = () => {
        let star = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= ratingNumber) {
                star.push(
                    <Image
                        key={i}
                        source={require('../../../assets/Icon/star_on.png')}
                        style={{ width: 14, height: 14 }}
                    />
                )
            } else {
                star.push(
                    <Image
                        key={i}
                        source={require('../../../assets/Icon/star_off.png')}
                        style={{ width: 14, height: 14 }}
                    />
                )
            }
        }

        return star;
    }

    return (
        <View style={styles.ratingContainer}>
            <View style={styles.startContainer}>
                {renderStar()}
            </View>
            <Number number={ratingNumber} type='decimal' />
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