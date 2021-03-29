import { useState, useEffect } from "react";
import axios from "axios";
const WeatherBox = () => {
    const [data, setData] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async (latData, longData) => {
            const weatherApikey = "140eae236f257a902b45a343a37b2f4e";
            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${Math.floor(
                latData
            )}&lon=${Math.floor(longData)}&appid=${weatherApikey}`;
            console.log(weatherURL);
            try {
                const response = await axios.get(weatherURL);
                setWeatherData(response);
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        };
        const fetchData = async () => {
            const locationURL =
                "http://api.ipstack.com/110.34.0.207?access_key=74b8b4d890898b4004cfc419aff8584c";
            try {
                const response = await axios.get(locationURL);
                fetchWeatherData(
                    response.data.latitude,
                    response.data.longitude
                );
                setData(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    console.log(data);
    console.log(weatherData);

    return <div className="weatherbox col-md-2 box">weather box</div>;
};

export default WeatherBox;
