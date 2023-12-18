import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap } from '../../components'

const SuccessOrder = ({ navigation }: any) => {
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
            >You're Order</Text>
            <Text
                style={styles.subtitle}
            >Just Stay</Text>
            <Gap height={40} />
            <View
                style={styles.button}
            >
                <Button
                    title="Order Other Pempek"
                    OnPress={() => navigation.replace('MainApp')}
                />
            </View>
            <View
                style={styles.button}
            >
                <Button
                    title="Visit My Order"
                    OnPress={() => navigation.replace('MainApp', { screen: 'Order' })}
                    color="#8D92A3"
                    textColor="white"
                />
            </View>
        </View>
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