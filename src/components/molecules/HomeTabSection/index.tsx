import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { useState } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { ItemListFood, Rating } from '..';
import { useNavigation } from '@react-navigation/native';



const NewTaste = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                paddingTop: 8,
                gap: 8,
            }}
        >
            <ItemListFood
                name={"Pempek"}
                price={20000}
                image={require('../../../assets/Dummy/pempek_1.jpeg')}
                onPress={() => navigation.navigate('FoodDetail')}
                rating />
            <ItemListFood
                name={"Pempek"}
                price={20000}
                image={require('../../../assets/Dummy/pempek_2.jpg')}
                rating />
            <ItemListFood
                name={"Pempek"}
                price={20000}
                image={require('../../../assets/Dummy/pempek_3.jpg')}
                rating />
            <ItemListFood
                name={"Pempek"}
                price={20000}
                image={require('../../../assets/Dummy/pempek_4.jpg')}
                rating />
        </View>
    )
};

const Popular = () => {
    return (
        <View>
            <View>
                <Image />
                <View>
                    <Text>Popular</Text>
                </View>
            </View>
        </View>
    )
};

const Recomended = () => {
    return (
        <View>
            <View>
                <Image />
                <View>
                    <Text>Recomended</Text>
                </View>
            </View>
        </View>
    )
};



const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recomended,
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

const HomeTabSection = () => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: '1', title: 'New Taste' },
        { key: '2', title: 'Popular' },
        { key: '3', title: 'Recomended' },
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

export default HomeTabSection

const styles = StyleSheet.create({})