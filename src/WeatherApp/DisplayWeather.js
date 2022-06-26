import React from 'react';

const DisplayWeather = ({data}) => {
    const weatherLocation = `${data?.location?.name}, ${data?.location?.region} ${data?.location?.country}`;
    const localTime = data?.location?.localtime;
    const displayWeatherForecast = data.forecast.forecastday.map(forecastDay => (
        <div key={forecastDay.date}>
            <h4>Daily Forecast - {forecastDay.date}</h4>
            <p>{forecastDay.day.avghumidity}</p>
            <p>{forecastDay.day.avgtemp_f}</p>
            <p>{forecastDay.day.avgvis_miles}</p>
            <p>{forecastDay.day.maxtemp_f}</p>
            <p>{forecastDay.day.mintemp_f}</p>
            <p>{forecastDay.day.maxwind_mph}</p>
            <p>{forecastDay.day.totalprecip_in}</p>
        </div>
    ));
    return <>
        <div className="displayWeather">
            <h2>{weatherLocation}</h2>
            <h5>{localTime}</h5>

            <h4>Current Weather</h4>
            <p>{data?.current?.condition.temp_f}</p>
            <p>{data?.current?.condition.text}</p>
            <p>{data?.current?.wind_mph}</p>
            <p>{data?.current?.wind_dir}</p>
            <p>{data?.current?.precip_in}</p>
            <p>{data?.current?.feelslike_f}</p>
            <p>{data?.current?.humidity}</p>
            <p>{data?.current?.cloud}</p>
            <p>{data?.current?.vis_miles}</p>
            {displayWeatherForecast}
        </div>
    </>

}

export default DisplayWeather;