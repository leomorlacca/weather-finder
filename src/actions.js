import { getWeather } from './services/openWeather';

export const searchAsync = payload => {
    return (dispatch) => {
        getWeather(payload).then(response => {
            dispatch(search(response.data));
        },
        e => {
        })
    }
}
export const search = data => ({
    type: 'SEARCH_WEATHER',
    data
});