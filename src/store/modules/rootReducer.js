import { combineReducers } from 'redux';

import weathers from './weather/reducer';

export default combineReducers({
  weathers,
});
