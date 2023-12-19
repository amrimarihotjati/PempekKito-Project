import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NumericFormat } from 'react-number-format'

const Number = ({ number, type, style }: { number: number, type: string, style?: any }) => {

    if (type === 'decimal') {
        return (
            <NumericFormat
                value={number}
                renderText={(value) => <Text
                    style={style}>{value}</Text>}
                decimalSeparator='.'
                displayType='text'
                decimalScale={1}
                fixedDecimalScale={true}

            />
        )
    }

    return (
        <NumericFormat
            value={number}
            thousandSeparator="."
            renderText={(value) => <Text style={style}>{value}</Text>}
            decimalSeparator=','
            displayType='text'
            prefix='Rp '
            style={style}
        />
    )
}

export default Number

const styles = StyleSheet.create({})