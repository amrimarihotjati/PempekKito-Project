import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Header, ItemListFood, ItemValue } from '../../components'

const OrderSummary = ({ navigation }: any) => {
    return (
        <View>
            <Header
                title="Order Summary"
                subTitle="Find your best Pempek"
                onBack={() => { }}
            />
            <View
                style={styles.content}
            >
                <Text
                    style={styles.label}
                >Item Ordered</Text>
                <ItemListFood
                    name="Pempek"
                    price={20000}
                    image={require('../../assets/Dummy/pempek_1.jpeg')}
                    items={10}
                    type="order-summary"
                />
                <Text
                    style={styles.label}
                >Details Transaction</Text>
                <ItemValue
                    label="Order ID"
                    value="ID123"
                />
                <ItemValue
                    label="Items"
                    value="10"
                />
                <ItemValue
                    label="Price"
                    value="ID123"
                />
                <ItemValue
                    label="Payment"
                    value="ID123"
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
                    value="Name"
                />
                <ItemValue
                    label="Phone"
                    value="Phone"
                />
                <ItemValue
                    label="House"
                    value="House"
                />
                <ItemValue
                    label="City"
                    value="City"
                />
                <ItemValue
                    label="Postal Code"
                    value="Postal Code"
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
                    OnPress={() => navigation.replace('SuccessOrder')}
                />
            </View>
        </View>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
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