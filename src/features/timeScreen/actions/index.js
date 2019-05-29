import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_FAILED, API_FAILURE } from './types'
import { getCall } from '../../../api';


export const getCurrentWeather = (zip, country) => {
  return async (dispatch) => {
    dispatch({ type: WEATHER_REQUEST });
    try {
      let response = await getCall(`weather?zip=${zip},${country}&APPID=975658e50dac6f906e79d227e85243b0`);
      let result = await response.json();
      if (response.status == 200) {
        if (typeof(result) != 'undefined') {
          try {
            dispatch({ type: WEATHER_SUCCESS, payload: result });
          } catch (e) {
            // error
          }
        }
      } else {
        dispatch({ type: WEATHER_FAILED, message: result.message });
      }
    } catch(error) {
      console.log('Weather API Error', error);
      alert('Weather API Error');
    }
  }
}
