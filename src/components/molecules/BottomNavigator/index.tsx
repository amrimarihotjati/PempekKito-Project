import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const BottomNavigator = ({ state, descriptors, navigation }: any) => {

    const Icon = ({ label, focused }: any) => {
        switch (label) {
            case 'Home':
                if (focused) {
                    return <Image
                        source={require('../../../assets/Icon/home_on.png')}
                        style={{
                            width: 25,
                            height: 25
                        }}
                    />
                } else {
                    return <Image
                        source={require('../../../assets/Icon/home.png')}
                        style={{
                            width: 25,
                            height: 25
                        }} />
                }
            case 'Order':
                if (focused) {
                    return <Image
                        source={require('../../../assets/Icon/order_on.png')}
                        style={{
                            width: 25,
                            height: 25
                        }}
                    />
                } else {
                    return <Image
                        source={require('../../../assets/Icon/order.png')}
                        style={{
                            width: 25,
                            height: 25
                        }}
                    />
                }
            case 'Profile':
                if (focused) {
                    return <Image
                        source={require('../../../assets/Icon/user_on.png')}
                        style={{
                            width: 25,
                            height: 25
                        }}
                    />
                } else {
                    return <Image
                        source={require('../../../assets/Icon/user.png')}
                        style={{
                            width: 25,
                            height: 25
                        }} />
                }
            default:
                return <Image source={require('../../../assets/Icon/home_on.png')} />
        }
    }

    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            height: 60,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        }}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 50,
                                marginBottom: 5,
                                marginTop: 5
                            }}
                        >
                            <Icon
                                label={label}
                                focused={isFocused} />
                            <Text style={{ color: isFocused ? '#FF7622' : '#222' }}>
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomNavigator

const styles = StyleSheet.create({})