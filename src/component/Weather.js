import React, { Component } from 'react';
import WeatherDay from './WeatherDay';

export class Weather extends Component {
    render() {
        return (
            <div>
               <WeatherDay weatherData={this.props.weatherData}/>
            </div>
        );
    }
}

export default Weather;

