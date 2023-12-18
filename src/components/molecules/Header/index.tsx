import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

interface HeaderProps {
    title: string,
    subTitle: string
    onBack?: () => void
}

const Header = ({ title, subTitle, onBack }: HeaderProps) => {

    return (
        <View style={styles.container}>
            {onBack && (
                <TouchableOpacity
                    activeOpacity={0.7}
                >
                    <Image
                        source={require('../../../assets/Icon/arrow_back.png')}
                        style={styles.arrowBack}
                    />
                </TouchableOpacity>
            )}
            <View>
                <Text
                    style={styles.title}
                >{title}</Text>
                <Text
                    style={styles.subTitle}
                >
                    {subTitle}
                </Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Medium',
        color: '#020202',
    },

    subTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
    },

    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },

    arrowBack: {
        width: 20,
        height: 20,
        padding: 15,
        marginRight: 10,
        marginLeft: -15,
    }
})