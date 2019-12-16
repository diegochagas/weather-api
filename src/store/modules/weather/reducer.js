import { types } from './actions';

const INITIAL_STATE = {
  weathers: [],
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_WEATHER_SUCCESS:
      return [action.payload.weather, ...state.weathers];
    default:
      return state;
  }
}
