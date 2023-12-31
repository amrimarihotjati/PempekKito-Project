import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React from 'react'

type TextInputProps = {
    label: string
    placeholder: string
    value: string
    onChangeText: (value: string) => void
    secureTextEntry?: boolean
}

const TextInput = ({ label, placeholder, ...restProps }: TextInputProps) => {
    return (
        <View>
            <Text
                style={styles.label}
            >{label}</Text>
            <TextInputRN
                style={styles.input}
                placeholder={placeholder}
                {...restProps}
            />
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        padding: 10,
        color: 'black',
        backgroundColor: 'white',
    }
})