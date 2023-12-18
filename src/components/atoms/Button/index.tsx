import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface ButtonProps {
    title: string
    color?: string
    textColor?: string
    OnPress?: () => void
}

const Button = ({ title, color = '#FF7622', textColor = 'white', OnPress }: ButtonProps) => {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: color,
            padding: 12,
            borderRadius: 12,
        },
        text: {
            fontSize: 14,
            fontFamily: 'Poppins-Medium',
            color: textColor,
            textAlign: 'center',
        }
    })

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={OnPress}
        >
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button
