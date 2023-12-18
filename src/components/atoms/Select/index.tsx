import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'

type SelectProps = {
    label: string
    value: string
    onSelectChange: (value: string) => void
}

const Select = ({ label, value, onSelectChange }: SelectProps) => {
    return (
        <View>
            <Text
                style={styles.label}
            >{label}</Text>
            <View
                style={styles.input}
            >
                <Picker
                    selectedValue={value}
                    onValueChange={(itemValue) =>
                        onSelectChange(itemValue)
                    }

                >
                    <Picker.Item
                        label="Pangkalan Balai"
                        value="Pangkalan Balai" />
                    <Picker.Item
                        label="Betung"
                        value="Betung" />
                    <Picker.Item
                        label="Sembawa"
                        value="Sembawa" />
                </Picker>
            </View>
        </View>
    )
}

export default Select

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
    },
    input: {
        borderWidth: 1,
        borderColor: '#020202',
        borderRadius: 8,
        padding: -10,
    }
})