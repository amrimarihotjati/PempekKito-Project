import { Image, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import { useEffect } from 'react'
import { FoodCard, Gap, HomeProfile, HomeTabSection, Rating } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { getFoodData } from '../../redux/action';



const Home = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch();
    const { food } = useSelector((state: any) => state.homeReducer);

    useEffect(() => {

        dispatch(getFoodData());
    }, []);

    return (
        <ScrollView >
            <View style={styles.page}>
                <StatusBar barStyle="light-content" backgroundColor={'#f95a6b'} />
                <HomeProfile />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Order')}
                >
                    <Image
                        source={require('../../assets/Ilustration/recomended_slider1.png')}
                        style={{ width: Dimensions.get('window').width, height: 200, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
                <Gap height={15} />
                <View>
                    <ScrollView
                        horizontal
                        showsVerticalScrollIndicator={false}>
                        <View
                            style={styles.foodCardContainer}
                        >
                            <Gap width={24} />
                            {food.map((item: any) => {
                                return (
                                    <FoodCard
                                        key={item.id}
                                        image={item.picturePatch}
                                        name={item.name}
                                        rating={item.rate}
                                        onPress={() => navigation.navigate('FoodDetail', item)}
                                    />
                                )
                            })}
                            <Gap width={24} />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.tabContainer}>
                    <HomeTabSection />
                </View>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    foodCardContainer: {
        flexDirection: 'row',
        marginBottom: 24
    },
    tabContainer: {
        flex: 1,
        height: 400
    },
})