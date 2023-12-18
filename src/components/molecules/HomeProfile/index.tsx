import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const HomeProfile = () => {
    return (
        <View
            style={styles.profileContainer}
        >
            <View>
                <Text
                    style={styles.appName}
                >Pempek Kito</Text>
                <Text
                    style={styles.desc}
                >Lets get some Pempek</Text>
            </View>
            <Image
                style={styles.profile}
                source={require('../../../assets/Dummy/profile.png')}
            />
        </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    profile: {
        width: 50,
        height: 50,
        borderRadius: 8
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: 'white'
    },
    appName: {
        fontSize: 24,
        fontFamily: 'Poppins-Medium',
        color: '#FF7622'
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3'
    },
})