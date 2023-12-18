import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";
import { useEffect } from "react";



export default function SplashScreen({ navigation }: any) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Signin')
        }, 3000)
    }, [])

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <StatusBar backgroundColor={'#FF7622'} />
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FF7622',
                    width: '100%',
                    height: '100%',
                }}
            >
                <View
                    style={{
                        backgroundColor: '#FF7622',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 20,
                    }}
                >
                    <Image
                        source={require('../../assets/Ilustration/Logo.png')}
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