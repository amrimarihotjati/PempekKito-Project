import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap } from '../..'
import { useNavigation } from '@react-navigation/native'

const EmptyOrder = () => {
    const navigation = useNavigation()

    return (
        <View
            style={styles.page}
        >
            <Image
                source={require('../../../assets/Ilustration/empty_order.png')}
                style={{
                    width: 250,
                    height: 250
                }}
            />
            <Text
                style={styles.title}
            >Belum Ada Pemesanan</Text>
            <Text
                style={styles.subtitle}
            >Belum pesan pempek? yuk pesan sekarang</Text>
            <Gap height={40} />
            <View
                style={styles.button}
            >
                <Button
                    title="Cari Pempek"
                    color="#ffce54"
                    textColor="black"
                    OnPress={() => navigation.replace('MainApp')}
                />
            </View>
        </View>
    )
}

export default EmptyOrder

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#da4453'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        marginTop: 20,
        color: 'white',
    },
    subtitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        marginTop: 10,
        textAlign: 'center',
        color: 'white',
    },
    button: {
        width: '70%',
        paddingHorizontal: 20,
        marginBottom: 10,
    }

})