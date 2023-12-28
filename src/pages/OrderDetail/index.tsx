import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Header, ItemListFood, ItemValue } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import { BASE_API } from '../../config'
import axios from 'axios'
import { getData } from '../../utils'

const OrderDetail = ({ navigation, route }: any) => {
    const item = route.params
    const total = item.quantity * item.food.price
    const tax = total / 100 * 10
    const driver = 10000
    const grandTotal = total + tax + driver

    const onCancelOrder = () => {
        const data = {
            status: 'CANCELLED'
        }

        getData('token').then((res) => {
            const token = res.value
            axios.post(`${BASE_API.url}/api/transaction/${item.id}`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((res) => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'MainApp' }],
                    })
                })
                .catch((err) => {
                    console.log('error cancel order', err)
                })
        })

    }

    return (
        <ScrollView>
            <View
                style={styles.page}
            >
                <Header
                    title="Order Detail"
                    subTitle="Detail pesanan pempek anda"
                    onBack={() => { navigation.goBack() }}
                />
                <View
                    style={styles.content}
                >
                    <Text
                        style={styles.label}
                    >Pesanan</Text>
                    <ItemListFood
                        name={item.food.name}
                        price={item.food.price}
                        image={{ uri: item.food.picturePatch }}
                        items={item.quantity}
                        type="order-summary"
                    />
                    <Text
                        style={styles.label}
                    >Rincian Pesanan</Text>
                    <ItemValue
                        label={item.food.name}
                        value={total}
                        type="currency"
                    />
                    <ItemValue
                        label="Kurir"
                        value={driver}
                        type="currency"
                    />
                    <ItemValue
                        label="Pajak"
                        value={tax}
                        type="currency"
                    />
                    <ItemValue
                        label="Total Harga"
                        value={grandTotal}
                        type="currency"
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
                        value={item.user.name}
                        type={''}
                    />
                    <ItemValue
                        label="Phone"
                        value={item.user.phoneNumber}
                        type={''}

                    />
                    <ItemValue
                        label="Address"
                        value={item.user.address}
                        type={''}
                    />
                    <ItemValue
                        label="House"
                        value={item.user.house}
                        type={''}
                    />
                    <ItemValue
                        label="City"
                        value={item.user.city}
                        type={''}
                    />
                </View>

                <View
                    style={styles.deliver}
                >
                    <Text
                        style={styles.label}
                    >Order Status :</Text>
                    <ItemValue
                        label={`#${item.id}`}
                        value={item.status}
                        type={''}
                    />
                </View>
                <View
                    style={{
                        paddingHorizontal: 24,
                        marginTop: 24
                    }}
                >
                    {item.status === 'PENDING' && (
                        <Button
                            title="Batalkan Pesanan"
                            color='#D9435E'
                            OnPress={onCancelOrder}
                        />
                    )}
                </View>
            </View>
        </ScrollView>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginBottom: 24
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
        marginTop: 16,
        backgroundColor: 'white',
    }
})