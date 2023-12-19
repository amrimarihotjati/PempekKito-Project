import { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { getData } from '../../../utils'


const HomeProfile = () => {
    const [photo, setPhoto] = useState('http://foodmarketcms.test/storage/assets/user/wTdpLFI4Fv4TiYMuuzvZqwqWiOFWqt1x5iV7e97w.jpg');

    console.log(photo)

    useEffect(() => {
        getData('userProfile').then((res) => {
            console.log(res)
            setPhoto(res.profile_photo_url);
        })
    }, [])

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
                source={{ uri: photo }}
                resizeMode="cover"
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