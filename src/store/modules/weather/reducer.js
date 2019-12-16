import { types } from './actions';

const INITIAL_STATE = [];

export default function weathers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_WEATHER_SUCCESS:
      return [action.payload.weather, ...state];
    case types.UPDATE_WEATHER_FAILURE:
      return action.payload.err;
    default:
      return state;
  }
}
