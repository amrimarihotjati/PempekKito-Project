import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Header, ItemListFood, ItemValue, Loading } from '../../components'
import axios from 'axios';
import { BASE_API } from '../../config';
import { useEffect, useState } from 'react';
import { getData } from '../../utils';
import { WebView } from 'react-native-webview';

const OrderSummary = ({ navigation, route }: any) => {
    const { item, transaction, userProfile } = route.params;
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [paymentURL, setPaymentURL] = useState('https://google.com`');

    const onCheckout = () => {
        const data = {
            food_id: item.id,
            user_id: userProfile.id,
            quantity: transaction.totalItem,
            total: transaction.grandTotal,
            status: 'PENDING',
        };
        getData('token').then((resToken) => {
            const token = resToken.value
            axios.post(`${BASE_API.url}/api/checkout`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((res) => {

                    setIsPaymentOpen(true);
                    setPaymentURL(res.data.data.payment_url)
                })
                .catch((err) => {
                    console.log('checkout gagal', err)
                })
        })
    }

    const onNavChange = (state: any) => {
        if (state.url.includes('success')) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'SuccessOrder' }]
            })
        }
    }

    if (isPaymentOpen) {
        return (
            <>
                <Header
                    title="Payment"
                    subTitle="Pay your order"
                    onBack={() => { setIsPaymentOpen(false) }}
                />
                <WebView
                    source={{ uri: paymentURL }}
                    startInLoadingState={true}
                    renderLoading={() => (
                        <Loading />
                    )}
                    onNavigationStateChange={onNavChange}
                />
            </>
        )
    }

    return (
        <View
            style={styles.page}
        >
            <Header
                title="Order Summary"
                subTitle="Find your best Pempek"
                onBack={() => { navigation.goBack() }}
            />
            <ScrollView>

                <View
                    style={styles.content}
                >
                    <Text
                        style={styles.label}
                    >Item Ordered</Text>
                    <ItemListFood
                        name={item.name}
                        price={item.price}
                        image={{ uri: item.picturePatch }}
                        items={transaction.totalItem}
                        type="order-summary"
                    />
                    <Text
                        style={styles.label}
                    >Details Transaction</Text>
                    <ItemValue
                        label={item.name}
                        value={transaction.totalPrice}
                        type="currency"
                    />
                    <ItemValue
                        label="Driver"
                        value={transaction.driver}
                        type='currency'
                    />
                    <ItemValue
                        label="Tax 10%"
                        value={transaction.tax}
                        type='currency'
                    />
                    <ItemValue
                        label="Total Price"
                        value={transaction.grandTotal}
                        type='currency'
                    />
                </View>
                <View
                    style={styles.deliver}
                >
                    <Text
                        style={styles.label}
                    >Deliver to:</Text>
                    <ItemValue
                        label="Name"
                        value={userProfile.name}
                        type='name'
                    />
                    <ItemValue
                        label="Phone No"
                        value={userProfile.phoneNumber}
                        type='phone'
                    />
                    <ItemValue
                        label="Address"
                        value={userProfile.address}
                        type='address'
                    />
                    <ItemValue
                        label="House No"
                        value={userProfile.houseNumber}
                        type='address'
                    />
                </View>
                <View
                    style={{
                        paddingHorizontal: 24,
                        marginTop: 24
                    }}
                >
                    <Button
                        title="Checkout Now"
                        OnPress={onCheckout}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1
    },
    content: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 8
    },
    deliver: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 16
    }
})