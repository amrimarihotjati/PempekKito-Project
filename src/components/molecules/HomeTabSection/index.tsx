import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { useState, useEffect } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { ItemListFood, Rating } from '..';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
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