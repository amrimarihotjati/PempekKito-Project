import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import { EmptyOrder, Gap, Header, OrderTabSection } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/action';

const Order = () => {
    const [isEmpty] = useState(false);
    const dispatch = useDispatch();
    const { orders } = useSelector((state: any) => state.orderReducer);

    useEffect(() => {
        dispatch(getOrders())
    }, [])



    return (
        <View
            style={styles.page}
        >

            {orders.length < 1 ? <EmptyOrder /> :
                <View
                    style={styles.container}
                >
                    <Header
                        title="Your Orders"
                        subTitle="Find your best Pempek"
                    />
                    <Gap height={16} />
                    <OrderTabSection />
                </View>
            }
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
    }
})