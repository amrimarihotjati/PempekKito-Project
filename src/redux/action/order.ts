import axios from "axios"
import { BASE_API } from "../../config"
import { getData } from "../../utils"

export const getOrders = (token: string) => (dispatch: any) => {
    
    getData('token').then((res) => {
        token = res.value
        axios.get(`${BASE_API.url}/api/transaction`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            // console.log('response get orders',res.data.data.data)
            dispatch({
                type: 'SET_ORDER',
                value: res.data.data.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    })

}
export const getInProgress = (token: string) => (dispatch: any) => {
    getData('token').then((res) => {
        token = res.value;
        axios.all([
            axios.get(`${BASE_API.url}/api/transaction?status=PENDING`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }),
            axios.get(`${BASE_API.url}/api/transaction?status=SUCCESS`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }),
            axios.get(`${BASE_API.url}/api/transaction?status=ON_DELIVERY`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        ])
        .then(
            axios.spread((res1, res2, res3) => {
                const pending = res1.data.data.data
                const success = res2.data.data.data
                const onDelivery = res3.data.data.data

            dispatch({
                type: 'SET_IN_PROGRESS',
                value: [
                    ...pending,
                    ...success,
                    ...onDelivery
                ]
            });
        }))
        .catch((err) => {
            console.error(err);
            // Lakukan penanganan kesalahan di sini jika diperlukan
        });
    });
}


export const getPastOrders = (token: string) => (dispatch: any) => {
    
    getData('token').then((res) => {
        token = res.value
        axios.all([
            axios.get(`${BASE_API.url}/api/transaction?status=CANCELLED`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }),
            axios.get(`${BASE_API.url}/api/transaction?status=DELIVERED`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        ])
        .then(axios.spread((res1, res2) => {
            const cancelled = res1.data.data.data
            const delivered = res2.data.data.data
            dispatch({
                type: 'SET_PAST_ORDERS',
                value: [
                    ...cancelled,
                    ...delivered
                ]
            })

        }))
        .catch((err) => {
            console.log(err)
        })
    })

}