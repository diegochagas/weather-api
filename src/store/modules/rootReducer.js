import { combineReducers } from 'redux';

import { weathers, failureWeather } from './weather/reducer';

export default combineReducers({
  weathers,
  failureWeather,
});
