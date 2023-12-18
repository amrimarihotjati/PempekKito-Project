import { Image, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { FoodCard, Gap, HomeProfile, HomeTabSection, Rating } from '../../components'



const Home = () => {
    return (
        <ScrollView

        >
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
                            <FoodCard image={require('../../assets/Dummy/pempek_1.jpeg')} />
                            <FoodCard image={require('../../assets/Dummy/pempek_2.jpg')} />
                            <FoodCard image={require('../../assets/Dummy/pempek_3.jpg')} />
                            <FoodCard image={require('../../assets/Dummy/pempek_4.jpg')} />
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