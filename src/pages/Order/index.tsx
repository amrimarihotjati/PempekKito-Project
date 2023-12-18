import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { EmptyOrder, Gap, Header, OrderTabSection } from '../../components'

const Order = () => {
    const [isEmpty] = useState(false)

    return (
        <View
            style={styles.page}
        >
            {isEmpty ? <EmptyOrder /> :
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
    },
    container: {
        flex: 1,
    }
})