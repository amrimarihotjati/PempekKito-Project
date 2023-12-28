import axios from "axios";
import { setLoading } from ".";
import { showMessage, storeData } from "../../utils";
import { BASE_API } from "../../config";

type dataRegister = {
    name: string,
    email: string,
    password: string
}
type photoReducer = {
    isUploadPhoto: boolean,
    photo: any
}

type form = {
    email: string,
    password: string
}

type navigation = any
type dispatch = any

export const signUpAction = (dataRegister: dataRegister, photoReducer: photoReducer, navigation: navigation) => (dispatch : dispatch) => {

    axios.post(`${BASE_API.url}/api/register`, dataRegister)
    .then((res: any) => {
        const token = `Bearer ${res.data.data.access_token}`;
        const user = res.data.data.user;

        //simpan Data User ke local storage
        storeData('userProfile', user);

        //simpan access token
        storeData('token', {value: token});

        

        if (photoReducer.isUploadPhoto) {
            const dataPhoto = new FormData();
            dataPhoto.append('file', photoReducer);

            console.log('proses uplaod')
            
            console.log('photo reducer', photoReducer.isUploadPhoto)
            console.log('data photo', photoReducer.photo)

            axios.post(`${BASE_API.url}/api/user/photo`,
            dataPhoto, {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((resUpload: any) => {
                user.profile_photo_url = `${BASE_API.url}/storage/${resUpload.data.data[0]}`
                storeData('userProfile', user);
                navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]})('SuccessSignUp')
            })
            .catch((err: any) => {
                showMessage('Error Upload', 'danger')
                navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]})
            })
        }else {
            storeData('userProfile', user);
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]})
        }
        showMessage('Sukses Register', 'success')
        dispatch(setLoading(false))
    })
    .catch((err: any) => {
        showMessage('Error Register', 'danger')
        dispatch(setLoading(false))
    })
    console.log('data register', dataRegister)
}

export const signInAction = (form: form, navigation: navigation) => (dispatch : dispatch) => {
   dispatch(setLoading(true))
    axios.post(`${BASE_API.url}/api/login`, form)
    .then((res) => {

        const token = `Bearer ${res.data.data.access_token}`
        const user = res.data.data.user
        dispatch(setLoading(false))

        storeData('token', {
            value: token
        });
        storeData('userProfile', res.data.data.user)
     
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
    })
    .catch((err) => {
        dispatch(setLoading(false))
        console.log('Error Login', err);
    })
}