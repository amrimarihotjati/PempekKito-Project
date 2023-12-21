import { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { getData } from '../../../utils'

type Iuser = {
    name: string,
    email: string,
    profile_photo_url: string
}


const HomeProfile = () => {
    const [photo, setPhoto] = useState('http://foodmarketcms.test/storage/assets/user/wTdpLFI4Fv4TiYMuuzvZqwqWiOFWqt1x5iV7e97w.jpg');
    const [dataProfile, setDataProfile] = useState<Iuser>({} as Iuser);

    console.log(photo)

    useEffect(() => {
        getData('userProfile').then((res) => {
            console.log(res)
            setPhoto(res.profile_photo_url);
            setDataProfile(res);
        })
    }, [])

    return (
        <View
            style={styles.profileContainer}
        >
            <View
                style={{ flexDirection: 'row', gap: 16 }}
            >
                <Image
                    style={styles.profile}
                    source={{ uri: photo }}
                    resizeMode="cover"
                />
                <View
                    style={{ gap: -5, justifyContent: 'center' }}
                >
                    <Text
                        style={styles.desc}
                    >Hallo,</Text>
                    <Text
                        style={styles.name}
                    >
                        {dataProfile.name}
                    </Text>
                </View>
            </View>
            <Image
                source={require('../../../assets/Ilustration/pempek_kito.png')}
                style={{ width: 100, height: 50 }}
                resizeMode="contain"
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
        backgroundColor: '#da4453',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    name: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        color: 'white'
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: 'white'
    },
})