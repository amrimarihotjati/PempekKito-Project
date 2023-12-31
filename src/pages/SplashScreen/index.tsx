import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";
import { useEffect } from "react";
import { getData } from "../../utils";


export default function SplashScreen({ navigation }: any) {
    useEffect(() => {
        setTimeout(() => {
            getData('token').then((res) => {
                console.log('token', res);
                if (res) {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'MainApp' }],
                    })
                } else {
                    navigation.replace('Signin')
                }
            })
        }, 4000)
    }, [])


    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <StatusBar backgroundColor={'#da4453'} />
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#da4453',
                    width: '100%',
                    height: '100%',
                }}
            >
                <View
                    style={{
                        backgroundColor: '#da4453',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 20,
                    }}
                >
                    <Image
                        source={require('../../../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png')}
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: 'Poppins-Medium'
                        }}
                    >Pempek Kito</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}