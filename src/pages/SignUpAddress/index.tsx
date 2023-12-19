import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Gap, Header, Select, TextInput } from '../../components'
import { setLoading, signUpAction } from '../../redux/action/index'
import { useFrom } from '../../utils'


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
        // console.log('Click SignUp', form)
        const dataRegister = {
            ...form,
            ...registerReducer
        }
        // console.log('full data register', dataRegister)
        dispatch(setLoading(true))
        dispatch(signUpAction(dataRegister, photoReducer, navigation))
    }


    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={styles.page}>
                <Header
                    title="Address"
                    subTitle="Make sure its valid"
                    onBack={() => { navigation.goBack() }}
                />
                <View style={styles.container}>
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
                        color="#FF7622"
                        title="Sign Up Now"
                        textColor='black'
                        OnPress={onSignUp}
                    />
                </View>
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
        marginTop: 24,
        flex: 1
    },
    page: {
        flex: 1
    }
})