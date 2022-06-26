import React, {useState, useRef} from "react";
import useGetFetchData from './WeatherHook';

import { Snow } from 'iconoir-react'
import { Thunderstorm } from 'iconoir-react'
import { SunLight } from 'iconoir-react'
import { CloudSunny } from 'iconoir-react'
import { HeavyRain } from 'iconoir-react'
import { Wind } from 'iconoir-react'

import "./Weather.css"

import { createWeatherForecastEndpoint } from './constants';

import DisplayWeather from './DisplayWeather';
import WeatherCard from './WeatherCard';

const WeatherController = () => {
    // a perfect use case for useRef is not re-rendering the component every time you update an input for a button onclick api fetch from a hooky!
    // const [zipCode, setZipCode] = useState('');
    // const [forecast, setForecast] = useState('');
    const zipCode = useRef('');
    const forecast = useRef('');
    const endPoint = createWeatherForecastEndpoint('0123fd67c7eb4d57b66183002222306', zipCode.current.value, forecast.current.value);
    const {response, apiError, isLoading, onClickFetchData} = useGetFetchData(endPoint);

    // const weatherHandler = (e) => {
    //     setZipCode(e.target.value);
    // }

    // const forecastHandler = (e) => {
    //     setForecast(e.target.value);
    // }

    const disableWeatherButtonValidate = () => {
        if (zipCode.length === 5 && forecast.length > 0) return false;
        return true;
    }

    if (isLoading) return <h4>Loading Weather!</h4>
    if (apiError) return <h4>apiError</h4>

    const WeatherData = <WeatherCard>
        <DisplayWeather data={response}/>
    </WeatherCard>

    return <div className="appWrapper">
        <h1 className="appHeader"><Thunderstorm/> <SunLight/> <HeavyRain/> <Wind/> <CloudSunny/> <Snow/></h1>
        <WeatherCard>
            <form className="weatherForm" onSubmit={onClickFetchData}>
                <input className="weatherInput" ref={zipCode} placeholder='Type Zip Code Here...'/>
                <input className="weatherInput" ref={forecast} placeholder='Set forecast days here...'/>
                <button className="weatherButton" disabled={disableWeatherButtonValidate}>Get Weather</button>
            </form>
        </WeatherCard>
        {response && WeatherData}
    </div>
}

export default WeatherController;