import { types } from './actions';

const INITIAL_STATE = [];

export function weathers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_WEATHER_SUCCESS:
      return [action.payload.weather, ...state];
    default:
      return state;
  }
}

export function failureWeather(state = {}, action) {
  switch (action.type) {
    case types.UPDATE_WEATHER_FAILURE:
      return action.payload.err;
    default:
      return state;
  }
}
