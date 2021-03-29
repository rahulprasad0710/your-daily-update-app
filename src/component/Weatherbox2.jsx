import { useState, useEffect } from "react";
import axios from "axios";
const WeatherBox = () => {
    const [weatherData, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const params = {
            access_key: "a3e008ff74aa59db9cd714a57da77782",
            query: "fetch:ip",
        };

        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(
                    "http://api.weatherstack.com/current",
                    { params }
                );
                setData(response);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchWeatherData();
    }, []);

    console.log(weatherData);

    return (
        <div className="weatherbox col-md-2 d-flex justify-content-center align-items-center box p-2 mb-2">
            {isLoading && (
                <div className="d-flex justify-content-center align-items-center">
                    <p className="spinner-border text-info" role="status"></p>{" "}
                </div>
            )}
            {weatherData && !weatherData.data.success && (
                <div>
                    {" "}
                    <h5 className="text-center text-info text">
                        {weatherData.data.current.temperature}℃
                    </h5>
                    <h5 className="text-center text-info ">
                        {weatherData.data.location.name} ,
                    </h5>
                    <h5 className="text-center text-info ">
                        {weatherData.data.location.country}
                    </h5>{" "}
                </div>
            )}
        </div>
    );
};

export default WeatherBox;
