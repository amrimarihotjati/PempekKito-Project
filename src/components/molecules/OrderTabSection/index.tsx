import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { useState } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { ItemListFood, Rating } from '..';
import { useNavigation } from '@react-navigation/native';


const InProgress = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                paddingTop: 8,
                gap: 8,
            }}
        >
            <ItemListFood
                image={require('../../../assets/Dummy/pempek_2.jpg')}
                name="Pempek"
                inProgress
                orderItems={3}
                price={30000}
                type="in-progress"
            />
            <ItemListFood
                image={require('../../../assets/Dummy/pempek_2.jpg')}
                name="Pempek Lenggang"
                inProgress
                orderItems={4}
                price={40000}
                type="in-progress"
            />
            <ItemListFood
                image={require('../../../assets/Dummy/pempek_2.jpg')}
                name="Pempek Bakar"
                inProgress
                orderItems={5}
                price={50000}
                type="in-progress"
            />
        </View>
    )
};

const PastOrders = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                paddingTop: 8,
                gap: 8,
            }}
        >
            <ItemListFood
                image={require('../../../assets/Dummy/pempek_2.jpg')}
                name="Pempek Bakar"
                inProgress
                items={3}
                price={30000}
                type="past-orders"
                date="Jun 16, 14.00"
                status="Cancelled"
                onPress={() => navigation.navigate('OrderDetail')}
            />
            <ItemListFood
                image={require('../../../assets/Dummy/pempek_2.jpg')}
                name="Pempek Lenggang"
                inProgress
                items={4}
                price={40000}
                type="past-orders"
            />
            <ItemListFood
                image={require('../../../assets/Dummy/pempek_2.jpg')}
                name="Pempek Dos"
                inProgress
                items={5}
                price={50000}
                type="past-orders"
            />
        </View>
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