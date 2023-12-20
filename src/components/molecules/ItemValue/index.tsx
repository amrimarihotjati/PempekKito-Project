import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Number } from '..'

type ItemValueProps = {
    label: string
    value: string | number
    type: string | number
}

const ItemValue = ({ label, value, type }: ItemValueProps) => {
    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.label}
            >{label}</Text>
            {type === 'currency' ?
                <Number number={value} style={styles.value} type='' />
                :
                <Text style={styles.value}>{value}</Text>}
        </View>
    )
}

export default ItemValue

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        marginVertical: 2
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3'
    },
    value: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    }
})