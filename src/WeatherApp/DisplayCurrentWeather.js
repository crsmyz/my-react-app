import React from 'react';

const DisplayCurrentWeather = ({data}) => {
    const weatherLocation = `${data?.location?.name}, ${data?.location?.region} ${data?.location?.country}`;
    const localTime = data?.location?.localtime;
    return <>
        <div className="displayWeather">
            <h2>{weatherLocation}</h2>
            <h5>{localTime}</h5>
            <h4>Current Weather</h4>
            <p>Current Temp:</p>
            <p>{data?.current?.condition.temp_f}</p>
            <p>{data?.current?.condition.text}</p>
            <p>{data?.current?.wind_mph}</p>
            <p>{data?.current?.wind_dir}</p>
            <p>{data?.current?.precip_in}</p>
            <p>{data?.current?.feelslike_f}</p>
            <p>{data?.current?.humidity}</p>
            <p>{data?.current?.cloud}</p>
            <p>{data?.current?.vis_miles}</p>
        </div>
    </>
}

export default DisplayCurrentWeather;