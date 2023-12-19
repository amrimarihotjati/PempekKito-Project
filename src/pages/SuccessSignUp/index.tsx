import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap } from '../../components'

const SuccessSignUp = ({ navigation }: any) => {
    return (
        <View
            style={styles.page}
        >
            <Image
                source={require('../../assets/Ilustration/Success_SignUp.png')}
                style={{
                    width: 250,
                    height: 250
                }}
            />
            <Text
                style={styles.title}
            >Yeay Completed!</Text>
            <Text
                style={styles.subtitle}
            >Now you can order, some Pempeks as a self-reward</Text>
            <Gap height={40} />
            <View>
                <Button
                    title="Find Pempek"
                    OnPress={() => navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })}
                />
            </View>
        </View>
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
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        marginTop: 20
    },
    subtitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        marginTop: 10,
        textAlign: 'center',
    }

})