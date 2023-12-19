import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Header, ItemListFood, ItemValue } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

const OrderDetail = ({ navigation }: any) => {
    return (
        <ScrollView>
            <View
                style={styles.page}
            >
                <Header
                    title="Order Detail"
                    subTitle="Find your best Pempek"
                    onBack={() => { navigation.goBack() }}
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
                    style={styles.deliver}
                >
                    <Text
                        style={styles.label}
                    >Order Status :</Text>
                    <ItemValue
                        label="#238924"
                        value="Paid"
                    />
                </View>
                <View
                    style={{
                        paddingHorizontal: 24,
                        marginTop: 24
                    }}
                >
                    <Button
                        title="Cancel Order"
                        color='#D9435E'
                        OnPress={() => navigation.replace('SuccessOrder')}
                    />
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