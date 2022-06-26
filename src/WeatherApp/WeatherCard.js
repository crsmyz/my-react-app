import React from "react";
import './WeatherCard.css'

const WeatherCard = (props) => {
    return <div className="dataCard">
        {props.children}
    </div>
}

export default WeatherCard;