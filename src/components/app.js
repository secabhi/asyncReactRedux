import React, { Component } from 'react';

import Demo from '../containers/demo'
import WeatherList from '../containers/weather_list';
import SearchBar from '../components/resusable/searchbar'
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}