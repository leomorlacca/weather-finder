import axios from 'axios';

export const getWeather = cityName => axios.get('https://api.openweathermap.org/data/2.5/weather?forecast?id=524901&APPID=b281595f9a40225ca317cbe17b8970d7&q={'+ cityName.city + ',' + cityName.country +'}');