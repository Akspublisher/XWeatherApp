import WeathersCard from "./WeathersCard";
import React, {useState} from "react";

export default function WeatherApp() {
const [weatherData, setWeatherData] = useState(null);
const [city, setCity] = useState("");
const [loading, setLoading] = useState(false);

const apiKey = "eb45132fe7614ff59a8105539263001";
        const fetchWeatherData = async () => {
        if(!city) return;
        setLoading(true);
        setWeatherData(null);
try {
     const endPoint = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
        const response = await fetch(endPoint);
        const data = await response.json();
        setWeatherData(data);
   } catch (error) {
        alert("Failed to fetch weather data");
    } finally {
        setLoading(false);
    } 
};

  return (
    <div>
      <h1 style={{marginBottom:"10px"

      }}>Welcome to WeatherApp</h1>
     <input type="text" 
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}   
        style={{padding:"10px", width:"200px", marginRight:"10px"}}/>
        <button style={{padding:"10px"}} onClick={fetchWeatherData}>Search</button>
    
     {loading && <p>Loading data…</p>}
    {weatherData && (
    <WeathersCard  
    temp={weatherData.current.temp_c}
    humidity={weatherData.current.humidity}
    condition={weatherData.current.condition.text}
    windSpeed={weatherData.current.wind_kph}
    />
    )}
    </div>
  );
}

 