import React, { useState } from 'react'
import './Weather.css';
import clearIcon from '../Images/clear.png'
import rainIcon from '../Images/rain.png'
import drizzleIcon from '../Images/drizzle.png'
import cloudIcon from '../Images/cloud.png'
import humidityIcon from '../Images/humidity.png'
import fogIcon from '../Images/fog.png'
import searchIcon from '../Images/search.png'
import snowIcon from '../Images/snow.png'
import windIcon from '../Images/wind.png'
import thunderstormIcon from '../Images/thunderstorm.png'
import maxTempIcon from '../Images/maxTemp.png'
import minTempIcon from '../Images/minTemp.png'

const Weather = () => {
    let apiKey = "fe56f6032013617f446747a7820eaa65";
    const [weatherIcon, setweatherIcon] = useState(cloudIcon);

    const Search = async () => {
        const element = document.getElementsByClassName("searchBar");
        if (element[0].value === " ") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;
        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName("percent");
        const wind = document.getElementsByClassName("speed");
        const location = document.getElementsByClassName("location");
        const temperature = document.getElementsByClassName("temperature");
        const maximumTemperature = document.getElementsByClassName("maxTemp");
        const minimumTemperature = document.getElementsByClassName("minTemp");

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = Math.floor(data.wind.speed) + " Km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp) + " °C";
        location[0].innerHTML = data.name;
        maximumTemperature[0].innerHTML = Math.floor(data.main.temp_max) + "°C";
        minimumTemperature[0].innerHTML = Math.floor(data.main.temp_min) + "°C";

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01d") {
            setweatherIcon(clearIcon);
        }
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02d") {
            setweatherIcon(cloudIcon);
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10d") {
            setweatherIcon(rainIcon);
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09d") {
            setweatherIcon(drizzleIcon);
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13d") {
            setweatherIcon(snowIcon);
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10d") {
            setweatherIcon(thunderstormIcon);
        }
        else if (data.weather[0].icon === "50d" || data.weather[0].icon === "50d") {
            setweatherIcon(fogIcon);
        }
        else {
            setweatherIcon(clearIcon);
        }
    }

    return (
        <div className="body">
            <div className="container">
                <div className="navbar">
                    <input type="text" className='searchBar' placeholder='Search Location' />
                    <div className="search" onClick={() => { Search() }}>
                        <img src={searchIcon} id='searchIcon' alt="..." />
                    </div>
                </div>
                <div className="container1">
                    <div className="imageContainer">
                        <div className="image">
                            <img src={weatherIcon} id='weatherImg' alt="" />
                        </div>
                        <div className="temperature">20°C</div>
                        <div className="location">Delhi</div>
                    </div>

                    <div className="tempContainer">
                        <div className="maxTemperature" id='smallBox'>
                            <img src={maxTempIcon} id='iconImg' alt="" />
                            <div className="Data">
                                <div className="maxTemp" id='data'>20°C</div>
                                <div className="text1">Max Temp</div>
                            </div>
                        </div>
                        <div className="minTemperature" id='smallBox'>
                            <img src={minTempIcon} id='iconImg' alt="" />
                            <div className="Data">
                                <div className="minTemp" id='data'>20°C</div>
                                <div className="text1">Min Temp</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container2">
                    <div className="humidity" id='smallBox'>
                        <img src={humidityIcon} id='iconImg' alt="" />
                        <div className="Data">
                            <div className="percent" id='data'>50%</div>
                            <div className="text1">Humidity</div>
                        </div>
                    </div>
                    <div className="wind" id='smallBox'>
                        <img src={windIcon} id='iconImg' alt="" />
                        <div className="Data">
                            <div className="speed" id='data'>50%</div>
                            <div className="text1">Wind</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Weather