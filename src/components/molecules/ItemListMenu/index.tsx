import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ItemListMenuProps = {
    label: string
}

const ItemListMenu = ({ label }: ItemListMenuProps) => {
    return (
        <View
            style={styles.container}
        >
            <Text>{label}</Text>
            <Text> • </Text>
        </View>
    )
}

export default ItemListMenu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})