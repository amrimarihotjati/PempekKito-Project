import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { FoodDetail, Home, Order, OrderDetail, OrderSummary, Profile, SignUpAddress, Signin, SplashScreen, SuccessOrder, SuccessSignUp } from '../pages';
import SignUp from '../pages/SignUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from '../components/molecules/BottomNavigator';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator
            tabBar={props => <BottomNavigator {...props} />}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Order"
                component={Order}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Signin"
                component={Signin}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Signup"
                component={SignUp}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignUpAddress"
                component={SignUpAddress}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SuccessSignUp"
                component={SuccessSignUp}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="FoodDetail"
                component={FoodDetail}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="OrderSummary"
                component={OrderSummary}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SuccessOrder"
                component={SuccessOrder}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="OrderDetail"
                component={OrderDetail}
                options={{ headerShown: false }}
            />


        </Stack.Navigator>
    )
}

export default Router;