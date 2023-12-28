import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { ItemListFood } from '..';
import { getFoodDataByTypes } from '../../../redux/action';



const NewTaste = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { newTaste } = useSelector((state: any) => state.homeReducer);

    useEffect(() => {
        dispatch(getFoodDataByTypes('new_food'));
    }, [])

    return (
        <View
            style={{
                paddingTop: 8,
                gap: 8,
            }}
        >
            <ScrollView>
                {newTaste.map((item: any) => {
                    return (
                        <ItemListFood
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            image={{ uri: item.picturePatch }}
                            onPress={() => navigation.navigate('FoodDetail', item)}
                            rating={item.rate}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
};

const Popular = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { popular } = useSelector((state: any) => state.homeReducer);

    useEffect(() => {
        dispatch(getFoodDataByTypes('popular'));
    }, [])

    return (
        <View
            style={{
                paddingTop: 8,
                gap: 8,
            }}
        >
            {popular.map((item: any) => {
                return (
                    <ItemListFood
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        image={{ uri: item.picturePatch }}
                        onPress={() => navigation.navigate('FoodDetail', item)}
                        rating={item.rate}
                    />
                )
            })}
        </View>
    )
};

const Recomended = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { recomended } = useSelector((state: any) => state.homeReducer);

    useEffect(() => {
        dispatch(getFoodDataByTypes('recomended'));
    }, [])

    return (
        <View
            style={{
                paddingTop: 8,
                gap: 8,
            }}
        >
            {recomended.map((item: any) => {
                return (
                    <ItemListFood
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        image={{ uri: item.picturePatch }}
                        onPress={() => navigation.navigate('FoodDetail', item)}
                        rating={item.rate}
                    />
                )
            })}
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
        tabStyle={{ width: Dimensions.get('window').width / 3 }}
        renderLabel={({ route, focused }) => (
            <Text
                style={{ color: focused ? '#da4453' : 'grey' }}
            >{route.title}</Text>
        )}
        renderIcon={({ route, focused, color }) => (
            <Image
                source={route.icon}
                style={{ tintColor: focused ? '#da4453' : 'grey', width: 24, height: 24 }}
            />
        )}
    />
)

const HomeTabSection = () => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: '1', title: 'Terbaru', icon: require('../../../assets/Icon/new_taste.png') },
        { key: '2', title: 'Populer', icon: require('../../../assets/Icon/popular.png') },
        { key: '3', title: 'Rekomendasi', icon: require('../../../assets/Icon/recomended.png') },
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