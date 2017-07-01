import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/resusable/chart';
import GoogleMap from '../components/resusable/google_map';

class WeatherList extends Component {

  renderWeather(data) {
    const cityname = data.city.name;
    const temps = data.list.map(weather => weather.main.temp);
    const pressure = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);
    const {lon,lat} =   data.city.coord.lon;
  

    return (
      <tr key={data.city.id}>
        <td>
          <GoogleMap lon={lon} lat={lat}/>{data.city.name}</td>
        <td>{data.city.name}</td>
        <td>
         <Chart data={temps} color={'orange'}/>
        </td>
        <td>
         <Chart data={pressure} color={'red'}/>
        </td>
        <td>
         <Chart data={humidities} color={'green'}/>
        </td>
      </tr>
    )
  }

  render() {
    if (this.props.weather.length == 0) {
      return (
        <div></div>
      )
    }
    else {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      )
    }
  }
}

function mapStatsToProps({ weather }) {
  return {
    weather
  };
}

export default connect(mapStatsToProps)(WeatherList);