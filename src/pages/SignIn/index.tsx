import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { Button, Gap, Header, TextInput } from '../../components'
import { useFrom } from '../../utils';
import axios from 'axios';


const Signin = ({ navigation }: any) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [form, setForm] = useFrom({
        email: '',
        password: '',
    });

    const onSignIn = () => {
        console.log('Click SignIn');
        axios.post('https://86f4-182-253-250-101.ngrok-free.app/api/login', form)
            .then((res) => {
                console.log('Sukses Login', res.data);
                navigation.replace('MainApp');
            })
            .catch((err) => {
                console.log('Error Login', err);
            })
    };

    return (
        <View style={styles.page}>
            <Header
                title="Sign In"
                subTitle="Find your best Pempek" />
            <View style={styles.container}>
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
                    color="#FF7622"
                    title="Sign In"
                    textColor='black'
                    OnPress={onSignIn}
                />
                <Gap height={12} />
                <Button
                    OnPress={() => navigation.navigate('Signup')}
                    color='#8D92A3'
                    title="Create New Account" />
            </View>
        </View>
    )
}

export default Signin

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