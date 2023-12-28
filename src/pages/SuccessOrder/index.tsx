import { Image, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Gap } from '../../components'
import LinearGradient from 'react-native-linear-gradient'

const SuccessOrder = ({ navigation }: any) => {
    return (
        <LinearGradient
            colors={['#da4453', '#ed5565']}
            style={styles.page}
        >
            <View
                style={styles.page}
            >
                <StatusBar barStyle="light-content" backgroundColor={'#f95a6b'} />
                <Image
                    source={require('../../assets/Ilustration/success_order.png')}
                    style={{
                        width: 250,
                        height: 250,
                        resizeMode: 'contain',
                    }}
                />
                <Text
                    style={styles.title}
                >Pesanan Berhasil!</Text>
                <Text
                    style={styles.subtitle}
                >Silahkan tunggu, kami akan mengirimkan pesanan anda</Text>
                <Gap height={40} />
                <View
                    style={styles.button}
                >
                    <Button
                        title="Lihat Orderan Saya"
                        OnPress={() => navigation.replace('MainApp', { screen: 'Order' })}
                        color="#ffce54"
                        textColor="black"
                    />
                </View>
                <TouchableOpacity
                    onPress={() => navigation.replace('MainApp')}
                    activeOpacity={0.7}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 5
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                            }}
                        >
                            Masih belum cukup?
                        </Text>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            pesan pempek lagi.
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export default SuccessOrder

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        paddingHorizontal: 30,
        color: 'white',
    },
    button: {
        width: '70%',
        paddingHorizontal: 20,
        marginBottom: 10
    }

})