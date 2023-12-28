import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ItemListMenu } from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = () => {
    const navigation = useNavigation();
    const signOut = () => {

        AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Signin' }],
            });
        })
    }

    return (
        <View
            style={{
                paddingTop: 8,
            }}
        >
            <ItemListMenu
                label="Edit Profil" />
            <ItemListMenu
                label="Alamat" />
            <ItemListMenu
                label="Keamanan" />
            <ItemListMenu
                label="Pembayaran" />
            <ItemListMenu
                label="Keluar" onPress={signOut} />
        </View>
    )
};

const FoodMarket = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                paddingTop: 8,
                gap: 8,
            }}
        >
            <ItemListMenu
                label="Nilai Aplikasi" />
            <ItemListMenu
                label="Bantuan" />
            <ItemListMenu
                label="Privacy & Policy" />
            <ItemListMenu
                label="Term & Conditions" />
        </View>
    )
};

const renderScene = SceneMap({
    1: Account,
    2: FoodMarket,
});

const initialLayout = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

const renderTabBar = (props: any) => (
    <TabBar
        {...props}
        indicatorStyle={{
            backgroundColor: '#da4453',
            height: 2,
        }}
        style={{
            backgroundColor: 'white',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomColor: '#F2F2F2',
            borderBottomWidth: 1,
        }}
        tabStyle={{ width: 'auto' }}
        renderLabel={({ route, focused }) => (
            <Text
                style={{ color: focused ? '#da4453' : 'grey' }}
            >{route.title}</Text>
        )}
    />
)

const ProfileTabSection = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: '1', title: 'Akun' },
        { key: '2', title: 'Pengaturan' },
    ]);

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{
                backgroundColor: 'white',
                paddingHorizontal: 24,
            }}
        />
    )
}

export default ProfileTabSection

const styles = StyleSheet.create({})