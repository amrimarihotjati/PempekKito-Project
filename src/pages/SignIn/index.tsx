import { StyleSheet, View, Image, StatusBar, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { AppLottieView, Button, Gap, TextInput } from '../../components';
import { signInAction } from '../../redux/action/auth';
import { useFrom } from '../../utils';


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
            <LinearGradient
                colors={['#da4453', '#ed5565']}
                style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor={'#f95a6b'} />
                <Image
                    source={require('=../../../../pempekKito/src/assets/Ilustration/pempek_kito.png')}
                    style={{ width: 250, height: 200, alignSelf: 'center' }}
                    resizeMode='contain'

                />
                <TextInput
                    label="Email"
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
                    color="#48cfad"
                    title="Sign In"
                    textColor="white"
                    OnPress={onSignIn}
                />
                <Gap height={12} />
                <View
                    style={styles.containerText}
                >
                    <Text
                        style={styles.text}
                    >
                        Belum mempunyai akun?
                    </Text>
                    <Gap width={4} />
                    <Text
                        style={styles.textSignUp}
                        onPress={() => navigation.navigate('Signup')}
                    >Daftar akun</Text>
                </View>
            </LinearGradient>
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 26,
        flex: 1
    },
    page: {
        flex: 1
    },
    containerText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
    textSignUp: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
})