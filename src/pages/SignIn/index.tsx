import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, TextInput } from '../../components';
import { signInAction } from '../../redux/action/auth';
import { getData, useFrom } from '../../utils';
import { useEffect } from 'react';


const Signin = ({ navigation }: any) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const [form, setForm] = useFrom({
        email: '',
        password: '',
    });

    const onSignIn = () => {
        dispatch(signInAction(form, navigation));
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
                    color="#da4453"
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