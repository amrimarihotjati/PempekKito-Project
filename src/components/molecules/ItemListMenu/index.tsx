import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

type ItemListMenuProps = {
    label: string
    onPress: () => void
}

const ItemListMenu = ({ label, onPress }: ItemListMenuProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View
                style={styles.container}
            >
                <Text>{label}</Text>
                <Text> • </Text>
            </View>
        </TouchableOpacity>
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