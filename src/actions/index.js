import axios from 'axios';

const API_KEY = '35ed12ba0a2d3209cacfc8047b72b288';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Will be used in reducer as well
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // This will return a promise, to be handled by redux-promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}