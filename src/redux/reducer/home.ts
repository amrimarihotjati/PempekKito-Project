const initHome = {
    food: [],
    newTaste : [],
    recomended : [],
    popular : []
}

export const homeReducer = (state = initHome, action: any) => {
    if (action.type === 'SET_FOOD') {
        return {
            ...state,
            food: action.value
        }
    }

    if (action.type === 'SET_NEW_TASTE') {
        return {
            ...state,
            newTaste: action.value
        }
    }

    if (action.type === 'SET_RECOMENDED') {
        return {
            ...state,
            recomended: action.value
        }
    }

    if (action.type === 'SET_POPULAR') {
        return {
            ...state,
            popular: action.value
        }
    }
    
    return state;
}