import axios from 'axios';

const API_KEY = '62d3bbc5934bb0cd9c855b0a68ba5f7b';
const URL_CONST = 'http://api.openweathermap.org/data/2.5/forecast?appid='+API_KEY

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = URL_CONST+'&q='+city+',in'
  const request = axios.get(url);

  return{
    type:FETCH_WEATHER,
    payload:request
  }
}