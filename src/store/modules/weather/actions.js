export const types = {
  UPDATE_WEATHER_REQUEST: '@user/UPDATE_WEATHER_REQUEST',
  UPDATE_WEATHER_SUCCESS: '@user/UPDATE_WEATHER_SUCCESS',
  UPDATE_WEATHER_FAILURE: '@user/UPDATE_WEATHER_FAILURE',
};

export function updateWeatherRequest(data) {
  return {
    type: types.UPDATE_WEATHER_REQUEST,
    payload: { data },
  };
}

export function updateWeatherSuccess(weather) {
  return {
    type: types.UPDATE_WEATHER_SUCCESS,
    payload: { weather },
  };
}

export function updateWeatherFailure(err) {
  return {
    type: types.UPDATE_WEATHER_FAILURE,
    payload: { err },
  };
}
