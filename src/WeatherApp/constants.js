const WEATHER_API_PREFIX = 'http://api.weatherapi.com/v1';

export const createWeatherForecastEndpoint = (apiKey, location, days) => {
    return apiKey && location && days ? WEATHER_API_PREFIX + `/forecast.json?key=${apiKey}&q=${location}&days=${days}`: null;
}