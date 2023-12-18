import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ItemValueProps = {
    label: string
    value: string
}

const ItemValue = ({ label, value }: ItemValueProps) => {
    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.label}
            >{label}</Text>
            <Text
                style={styles.value}
            >{value}</Text>
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