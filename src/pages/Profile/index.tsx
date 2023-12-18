import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Gap, ProfileTabSection } from '../../components'

const Profile = () => {
    return (
        <View
            style={styles.page}
        >
            <Gap height={40} />
            <View style={styles.photo}>
                <View style={styles.photoContainer}>
                    <View style={styles.borderPhoto}>
                        <Image
                            style={styles.photoContainer}
                            source={require('../../assets/Dummy/profile.png')}
                        />
                    </View>
                </View>
                <Gap height={20} />
                <Text
                    style={styles.name}
                >Amri Marihot Jati</Text>
                <Text
                    style={styles.email}
                >amrimarihotjati@gmail.com</Text>
            </View>
            <Gap height={40} />
            <ProfileTabSection />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: 'white',
    },
    photo: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 16,
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderPhoto: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
        borderWidth: 1,
        borderColor: '#8D92A3',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'dashed',
    },
    name: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: '#020202'
    },
    email: {
        fontSize: 12,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3'
    }

})