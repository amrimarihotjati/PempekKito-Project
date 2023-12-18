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
                source={require('../../../assets/Ilustration/Success_SignUp.png')}
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
            >Belum pesan pempek? yuk cari sekarang</Text>
            <Gap height={40} />
            <View
                style={styles.button}
            >
                <Button
                    title="Cari Pempek"
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
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        marginTop: 20
    },
    subtitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        marginTop: 10,
        textAlign: 'center',
    },
    button: {
        width: '70%',
        paddingHorizontal: 20,
        marginBottom: 10
    }

})