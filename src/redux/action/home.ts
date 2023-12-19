import { BASE_API } from "../../config"
import axios from "axios"

export const getFoodData = () => (dispatch: any) => {
    axios.get(`${BASE_API.url}/api/food`)
    .then((res) => {
        // console.log('ini adalah data food', res.data.data.data);
        dispatch({
            type: 'SET_FOOD',
            value: res.data.data.data
        })
    })
    .catch((err) => {
        console.log(err)
    })
}

export const getFoodDataByTypes = (types: string) => (dispatch: any) => {
    axios.get(`${BASE_API.url}/api/food?types=${types}`)
    .then((res) => {
        if (types === 'new_food') {
            dispatch({
                type: 'SET_NEW_TASTE',
                value: res.data.data.data
            })
        } else if (types === 'popular') {
            dispatch({
                type: 'SET_POPULAR',
                value: res.data.data.data
            })
        } else if (types === 'recomended') {
            dispatch({
                type: 'SET_RECOMENDED',
                value: res.data.data.data
            })
        } else {
            // Hanya perbarui 'SET_FOOD' jika bukan tipe di atas
            dispatch({
                type: 'SET_FOOD',
                value: res.data.data.data
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
}
