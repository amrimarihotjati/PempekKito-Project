import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Gap, Header, Select, TextInput } from '../../components'
import { setLoading, signUpAction } from '../../redux/action/index'
import { useFrom } from '../../utils'
import LinearGradient from 'react-native-linear-gradient'


const SignUpAddress = ({ navigation }: any) => {
    const [form, setForm] = useFrom({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: 'Pangkalan Balai',
    })

    const dispatch = useDispatch()
    const { registerReducer, photoReducer } = useSelector((state: any) => state)


    const onSignUp = () => {

        const dataRegister = {
            ...form,
            ...registerReducer
        }

        dispatch(setLoading(true))
        dispatch(signUpAction(dataRegister, photoReducer, navigation))
    }


    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={styles.page}>
                <LinearGradient
                    colors={['#da4453', '#ed5565']}
                    style={styles.container}>
                    <TextInput
                        label="Phone Number"
                        placeholder="Type your phone number"
                        value={form.phoneNumber}
                        onChangeText={(value) => setForm('phoneNumber', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Address"
                        placeholder="Type your address"
                        value={form.address}
                        onChangeText={(value) => setForm('address', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="House Number"
                        placeholder="Type your house number"
                        value={form.houseNumber}
                        onChangeText={(value) => setForm('houseNumber', value)}
                    />
                    <Gap height={24} />
                    <Select
                        label='City'
                        value={form.city}
                        onSelectChange={(value) => setForm('city', value)}
                    />
                    <Gap height={24} />
                    <Button
                        color="#48cfad"
                        title="Sign Up Now"
                        textColor='white'
                        OnPress={onSignUp}
                    />
                </LinearGradient>
            </View>
        </ScrollView>
    )
}

export default SignUpAddress

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        flex: 1
    },
    page: {
        flex: 1
    }
})