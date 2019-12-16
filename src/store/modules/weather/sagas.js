import { takeLatest, call, put, all } from 'redux-saga/effects';

import api, { API_KEY } from '../../../services/api';

import { types, updateWeatherSuccess, updateWeatherFailure } from './actions';

export function* fetchWeather({ payload }) {
  try {
    const city = payload.data;

    const response = yield call(
      api.get,
      `forecast?appid=${API_KEY}&q=${city},nz`
    );

    yield put(updateWeatherSuccess(response.data));
  } catch (err) {
    yield put(updateWeatherFailure(err));
  }
}

export default all([takeLatest(types.UPDATE_WEATHER_REQUEST, fetchWeather)]);
