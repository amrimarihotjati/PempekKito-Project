import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { useState, useEffect } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { ItemListFood, Rating } from '..';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getInProgress, getPastOrders } from '../../../redux/action';
import { ScrollView } from 'react-native-gesture-handler';


const InProgress = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { inProgress } = useSelector((state: any) => state.orderReducer);

    useEffect(() => {
        dispatch(getInProgress())
    }, [])

    return (
        <ScrollView>
            <View
                style={{
                    paddingTop: 8,
                    gap: 8,
                }}
            >
                {inProgress.map((item: any) => (
                    <ItemListFood
                        key={item.id}
                        image={{ uri: item.food.picturePatch }}
                        name={item.food.name}
                        inProgress
                        items={item.quantity}
                        price={item.total}
                        type="in-progress"
                        onPress={() => navigation.navigate('OrderDetail', item)}
                    />
                ))}
            </View>
        </ScrollView>
    )
};

const PastOrders = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { pastOrders } = useSelector((state: any) => state.orderReducer);

    useEffect(() => {
        dispatch(getPastOrders())
    }, [])


    return (
        <ScrollView>
            <View
                style={{
                    paddingTop: 8,
                    gap: 8,
                }}
            >
                {pastOrders.map((item: any) => (
                    <ItemListFood
                        key={item.id}
                        image={{ uri: item.food.picturePatch }}
                        name={item.food.name}
                        inProgress
                        items={item.quantity}
                        price={item.total}
                        date={item.created_at}
                        type="past-orders"
                        onPress={() => navigation.navigate('OrderDetail', item)}
                        status={item.status}
                    />
                ))}
            </View>
        </ScrollView>
    )
};



const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
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

const OrderTabSection = () => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: '1', title: 'In Progress' },
        { key: '2', title: 'Past Orders' },
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

export default OrderTabSection

const styles = StyleSheet.create({})