
const initStateRegister = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
}

export const registerReducer = (state=initStateRegister, action : any) => {
    
    if (action.type === 'SET_REGISTER') {
        return {
            ...state,
            name: action.value.name,
            email: action.value.email,
            password: action.value.password,
            password_confirmation: action.value.password,
        }
    }
    return state;
};

const initPhoto = {
    uri: '',
    type: '',
    name: '',
    isUploadPhoto: true,
}

export const photoReducer = (state=initPhoto, action : any) => {
    if (action.type === 'SET_PHOTO') {
        return {
            ...state,
            uri: action.value.uri,
            type: action.value.type,
            name: action.value.name,
            isUploadPhoto: action.value.isUploadPhoto,
        }
    }
    if (action.type === 'SET_IS_UPLOAD_STATUS') {
        return {
            ...state,
            isUploadPhoto: action.value
        }
    }
    return state;
}