import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ItemListMenu } from '..';

const Account = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                paddingTop: 8,
            }}
        >
            <ItemListMenu label="Edit Profile" />
            <ItemListMenu label="Home Address" />
            <ItemListMenu label="Security" />
            <ItemListMenu label="Payment" />
            <ItemListMenu label="Log Out" />
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
            <ItemListMenu label="Rate App" />
            <ItemListMenu label="Help Center" />
            <ItemListMenu label="Privacy & Policy" />
            <ItemListMenu label="Term & Conditions" />
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
            backgroundColor: 'black',
            height: 1,
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
                style={{ color: focused ? 'black' : 'grey' }}
            >{route.title}</Text>
        )}
    />
)

const ProfileTabSection = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: '1', title: 'Account' },
        { key: '2', title: 'Food Market' },
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
            }}
        />
    )
}

export default ProfileTabSection

const styles = StyleSheet.create({})