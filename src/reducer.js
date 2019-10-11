const initialState = {
    favorites: [],
    result: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_WEATHER':
            return {
                ...state,
                results: action.data
            }
        default:
            return state;
    }
}