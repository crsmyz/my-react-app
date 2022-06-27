import React, { useState } from "react";
import useGetFetchData from './WeatherHook';

import { Snow } from 'iconoir-react';
import { Thunderstorm } from 'iconoir-react';
import { SunLight } from 'iconoir-react';
import { CloudSunny } from 'iconoir-react';
import { HeavyRain } from 'iconoir-react';
import { Wind } from 'iconoir-react';

import "./Weather.css";

import { createWeatherForecastEndpoint } from './constants';
// import { debounce } from './UtilFunctions';

import DisplayCurrentWeather from './DisplayCurrentWeather';
import WeatherCard from './WeatherCard';

const WeatherController = () => {
    const [zipCode, setZipCode] = useState('');
    const [forecast, setForecast] = useState('');
    const endPoint = createWeatherForecastEndpoint('0123fd67c7eb4d57b66183002222306', zipCode, forecast);
    const {response, apiError, isLoading, onClickFetchData} = useGetFetchData(endPoint);

    const weatherHandler = (e) => {
        setZipCode(e.target.value);
    }

    const forecastHandler = (e) => {
        setForecast(e.target.value);
    }

    const disableWeatherButtonValidate = () => {
        if (zipCode.length === 5 && forecast.length > 0) return false;
        return true;
    }

    if (isLoading) return <h4>Loading Weather!</h4>
    if (apiError) return <h4>apiError</h4>

    const weatherLocation = `${response?.location?.name}, ${response?.location?.region} ${response?.location?.country}`;

    const weatherCurrent = <WeatherCard>
        <DisplayCurrentWeather data={response}/>
    </WeatherCard>

    const weatherForecast = response?.forecast?.forecastday?.map((forecastDay, index) => (
        <WeatherCard key={index}>
            <div>
                <h2>{weatherLocation}</h2>
                <h4>Daily Forecast - {forecastDay.date}</h4>
                <p>Avg humidity: {forecastDay.day.avghumidity}</p>
                <p>Avg Temp: {forecastDay.day.avgtemp_f}</p>
                <p>Avg Vis(miles): {forecastDay.day.avgvis_miles}</p>
                <p>High Temp: {forecastDay.day.maxtemp_f}</p>
                <p>Low Temp: {forecastDay.day.mintemp_f}</p>
                <p>Winds: {forecastDay.day.maxwind_mph}</p>
                <p>Total Percip: {forecastDay.day.totalprecip_in}</p>
            </div>
        </WeatherCard>
    ))

    return <div className="appWrapper">
        <h1 className="appHeader"><Thunderstorm/> <SunLight/> <HeavyRain/> <Wind/> <CloudSunny/> <Snow/></h1>
        <WeatherCard>
            <form className="weatherForm" onSubmit={onClickFetchData}>
                <input className="weatherInput" value={zipCode} onChange={weatherHandler} placeholder='Type Zip Code Here...'/>
                <input className="weatherInput" value={forecast} onChange={forecastHandler} placeholder='Set forecast days here...'/>
                <button className="weatherButton" disabled={disableWeatherButtonValidate}>Get Weather</button>
            </form>
        </WeatherCard>
        {response && weatherForecast}
    </div>
}

export default WeatherController;