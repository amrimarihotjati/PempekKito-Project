import { Image, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { Button, Gap } from '../../components'
import LinearGradient from 'react-native-linear-gradient'

const SuccessSignUp = ({ navigation }: any) => {
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
                    source={require('../../assets/Ilustration/success_sign.png')}
                    style={{
                        width: 250,
                        height: 250
                    }}
                />
                <Text
                    style={styles.title}
                >Akun berhasil dibuat!</Text>
                <Text
                    style={styles.subtitle}
                >Pesan pempek kesukaanmu sekarang.</Text>
                <Gap height={40} />
                <View>
                    <Button
                        color="#ffce54"
                        textColor="black"
                        title="Cari Pempek"
                        OnPress={() => navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })}
                    />
                </View>
            </View>

        </LinearGradient>
    )
}

export default SuccessSignUp

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        marginTop: 20
    },
    subtitle: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        marginTop: 10,
        textAlign: 'center',
    }

})