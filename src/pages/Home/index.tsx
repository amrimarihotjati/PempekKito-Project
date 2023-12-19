import { Image, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import { useEffect } from 'react'
import { FoodCard, Gap, HomeProfile, HomeTabSection, Rating } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { getFoodData } from '../../redux/action';



const Home = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch();
    const { food } = useSelector((state: any) => state.homeReducer);

    useEffect(() => {
        console.log('Pemanggilan getFoodData');
        dispatch(getFoodData());
    }, []);

    return (
        <ScrollView >
            <View style={styles.page}>
                <HomeProfile />
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
        marginVertical: 24
    },
    tabContainer: {
        flex: 1,
        height: 400
    },
})