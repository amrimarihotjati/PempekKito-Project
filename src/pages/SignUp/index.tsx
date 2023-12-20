import { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { Button, Gap, Header, TextInput } from '../../components'
import { showMessage, useFrom } from '../../utils'
import { launchImageLibrary } from 'react-native-image-picker'


const SignUp = ({ navigation }: any) => {

    const [form, setForm] = useFrom({
        name: '',
        email: '',
        password: '',
    })

    const [photo, setPhoto] = useState('')

    console.log('photo', photo)

    const dispatch = useDispatch();

    const onSignUp = () => {
        console.log('Click SignUp', form)
        dispatch({ type: 'SET_REGISTER', value: form })
        navigation.navigate('SignUpAddress')
    };

    const addPhoto = () => {
        launchImageLibrary({
            mediaType: 'photo',
            quality: 0.5,
            maxWidth: 200,
            maxHeight: 200
        },
            (response) => {
                if (response.didCancel) {
                    showMessage('Anda membatalkan pengambilan gambar', 'danger');
                } else if (response.assets && response.assets.length > 0) {
                    const source = { uri: response.assets[0].uri }
                    const dataImage = {
                        uri: response.assets[0].uri,
                        type: response.assets[0].type,
                        name: response.assets[0].fileName
                    }

                    const selectedPhoto = response.assets[0].uri || '';

                    setPhoto(selectedPhoto);

                    dispatch({ type: 'SET_PHOTO', value: dataImage });
                    dispatch({ type: 'SET_UPLOAD_STATUS', value: true });

                }
            })
    }

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={styles.page}>
                <Header
                    title="Sign Up"
                    subTitle="Find your best Pempek"
                    onBack={() => { navigation.goBack() }}
                />
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={addPhoto}
                    >
                        <View style={styles.photo}>
                            <View style={styles.borderPhoto}>
                                {photo ?
                                    <Image
                                        source={{ uri: photo }}
                                        style={styles.photoContainer}
                                    />
                                    :
                                    <View style={styles.photoContainer}>
                                        <Text style={styles.addPhoto}
                                        >Add Photo</Text>
                                    </View>

                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TextInput
                        label="Full Name"
                        placeholder="Type your full name"
                        value={form.name}
                        onChangeText={(value) => setForm('name', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Email Address"
                        placeholder="Type your email address"
                        value={form.email}
                        onChangeText={(value) => setForm('email', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Password"
                        placeholder="Type your password"
                        value={form.password}
                        onChangeText={(value) => setForm('password', value)}
                        secureTextEntry
                    />
                    <Gap height={24} />
                    <Button
                        color="#da4453"
                        title="Continue"
                        textColor='black'
                        OnPress={onSignUp}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1
    },
    page: {
        flex: 1
    },
    photo: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 16
    },
    addPhoto: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: '#8D92A3'
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
    }

})