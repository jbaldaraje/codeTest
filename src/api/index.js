export const API_URL = 'http://api.openweathermap.org/data/2.5/';

export const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export const getCall = (url) => {
  console.log(API_URL + url, { headers: {...HEADERS, Authorization: ''}, method: 'GET' });
  return fetch(API_URL + url, { headers: {...HEADERS, Authorization: ''}, method: 'GET' })
}
