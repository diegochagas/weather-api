import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import Chart from '../Chart';
// import GoogleMapComponent from '../GoogleMapComponent';

import { Table } from './styles';

export default function WeatherList() {
  const weathers = useSelector(state => state.weathers);
  const error = useSelector(state => state.failureWeather);

  if (weathers !== undefined && weathers.length > 0)
    return (
      <Table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {weathers.map(weather => {
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
            // const { lon, lat } = weather.city.coord;

            return (
              <tr key={weather.city.id}>
                <td>
                  {weather.city.name}

                  {/* <GoogleMapComponent lng={lon} lat={lat} /> */}
                </td>
                <Chart data={temps} color="orange" units="C" />
                <Chart data={pressures} color="green" units="hPa" />
                <Chart data={humidities} color="black" units="%" />
              </tr>
            );
          })}
        </tbody>
      </Table>
    );

  if (error.message) {
    return (
      <div className="alert alert-danger">Write a New Zealand city name</div>
    );
  }

  return null;
}
