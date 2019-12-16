import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import Chart from '../Chart';
import GoogleMap from '../GoogleMap';

// import { Container } from './styles';

export default function WeatherList() {
  const weathers = useSelector(state => state.weathers);

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {(weathers !== undefined) & (weathers.length > 0)
            ? weathers.map(weather => {
                const temps = _.map(
                  weather.list.map(cityWeather => cityWeather.main.temp),
                  temp => temp - 273.15
                );
                const pressures = weather.list.map(
                  cityWeather => cityWeather.main.pressure
                );
                const humidities = weather.list.map(
                  cityWeather => cityWeather.main.humidity
                );
                const { lon, lat } = weather.city.coord;

                return (
                  <tr key={weather.city.id}>
                    <td>
                      <GoogleMap lon={lon} lat={lat} />
                    </td>
                    <Chart data={temps} color="orange" units="C" />
                    <Chart data={pressures} color="green" units="hPa" />
                    <Chart data={humidities} color="black" units="%" />
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      {weathers !== undefined && weathers.err !== undefined ? (
        <div style={{ color: 'red' }}>{weathers.err}</div>
      ) : null}
    </>
  );
}
